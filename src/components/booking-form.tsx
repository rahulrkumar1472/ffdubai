"use client";

import {useMemo, useState} from "react";
import {VALID_TIME_SLOTS} from "@/lib/time-slots";
import {getDictionary, type Locale} from "@/lib/i18n";

type Step = 1 | 2 | 3;

type FormState = {
  bookingType: "consultation" | "treatment";
  treatment: string;
  area: string;
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
};

type BookingApiResponse = {
  ok: boolean;
  message?: string;
  referenceId?: string;
  emailConfigured?: boolean;
  customerEmailSent?: boolean;
};

const initialState: FormState = {
  bookingType: "consultation",
  treatment: "",
  area: "",
  name: "",
  phone: "",
  email: "",
  date: "",
  time: ""
};

function getDubaiNow() {
  const local = new Date().toLocaleString("en-US", {timeZone: "Asia/Dubai"});
  return new Date(local);
}

function toDateString(value: Date) {
  const yyyy = value.getFullYear();
  const mm = String(value.getMonth() + 1).padStart(2, "0");
  const dd = String(value.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function slotToMinutes(slot: string) {
  const [hh, mm] = slot.split(":").map(Number);
  return hh * 60 + mm;
}

export function BookingForm({
  locale,
  initialMode = "consultation"
}: {
  locale: Locale;
  initialMode?: "consultation" | "treatment";
}) {
  const t = getDictionary(locale);
  const defaultMode = initialMode === "treatment" ? "treatment" : "consultation";
  const [step, setStep] = useState<Step>(1);
  const [state, setState] = useState<FormState>({...initialState, bookingType: defaultMode});
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<null | {referenceId: string; emailConfigured: boolean; customerEmailSent: boolean}>(null);

  const dubaiNow = useMemo(() => getDubaiNow(), []);
  const minDate = useMemo(() => toDateString(dubaiNow), [dubaiNow]);

  const filteredSlots = useMemo(() => {
    if (!state.date) return VALID_TIME_SLOTS;

    const isToday = state.date === minDate;

    if (!isToday) {
      return VALID_TIME_SLOTS;
    }

    const nowMinutes = dubaiNow.getHours() * 60 + dubaiNow.getMinutes();

    return VALID_TIME_SLOTS.filter((slot) => slotToMinutes(slot) > nowMinutes);
  }, [state.date, minDate, dubaiNow]);

  const selectedTreatmentLabel =
    t.booking.treatmentOptions.find((option) => option.value === state.treatment)?.label || state.treatment || "-";

  const validateStep1 = () => {
    if (!state.date || !state.time) {
      setError(t.booking.required);
      return false;
    }

    if (!VALID_TIME_SLOTS.includes(state.time)) {
      setError(t.booking.invalidTime);
      return false;
    }

    if (state.date === minDate && !filteredSlots.includes(state.time)) {
      setError(t.booking.pastTime);
      return false;
    }

    setError("");
    return true;
  };

  const validateStep2 = () => {
    if (!state.name.trim() || !state.phone.trim() || !state.email.trim()) {
      setError(t.booking.required);
      return false;
    }

    const emailRegex = /^\S+@\S+\.\S+$/;

    if (!emailRegex.test(state.email)) {
      setError(t.booking.invalidEmail);
      return false;
    }

    if (state.bookingType === "treatment" && !state.treatment) {
      setError(t.booking.missingTreatment);
      return false;
    }

    setError("");
    return true;
  };

  const submit = async () => {
    try {
      setSubmitting(true);

      const response = await fetch("/api/book", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({...state, locale})
      });

      const data = (await response.json()) as BookingApiResponse;

      if (!response.ok || !data.ok || !data.referenceId) {
        setError(data.message || t.booking.required);
        return;
      }

      setSuccess({
        referenceId: data.referenceId,
        emailConfigured: Boolean(data.emailConfigured),
        customerEmailSent: Boolean(data.customerEmailSent)
      });
      setError("");
      setState({...initialState, bookingType: defaultMode});
      setStep(1);
    } catch {
      setError(t.booking.required);
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="success-box booking-success-box">
        <h3>{t.booking.successTitle}</h3>
        <p>{t.booking.successMessage}</p>
        <p className="success-reference">
          <strong>{t.booking.successReference}:</strong> {success.referenceId}
        </p>
        <p className="success-email-status">{success.emailConfigured && success.customerEmailSent ? t.booking.customerEmailSent : t.booking.emailPending}</p>

        <div className="actions">
          <a className="primary-btn" href="https://wa.me/971521231743" rel="noreferrer" target="_blank">
            {t.booking.whatsappCta}
          </a>
          <a className="outline-btn" href={`/api/book/ics?ref=${encodeURIComponent(success.referenceId)}`}>
            {t.booking.calendarCta}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="form-wrap booking-funnel">
      <div className="funnel-steps" role="list" aria-label="Booking steps">
        <span className={step === 1 ? "step-chip active" : "step-chip"}>{t.booking.step1}</span>
        <span className={step === 2 ? "step-chip active" : "step-chip"}>{t.booking.step2}</span>
        <span className={step === 3 ? "step-chip active" : "step-chip"}>{t.booking.step3}</span>
      </div>

      {step === 1 ? (
        <div className="form-grid">
          <div>
            <label htmlFor="date">{t.booking.date}</label>
            <input
              id="date"
              min={minDate}
              onChange={(event) => setState((prev) => ({...prev, date: event.target.value, time: ""}))}
              type="date"
              value={state.date}
            />
          </div>
          <div>
            <label htmlFor="time">{t.booking.time}</label>
            <select id="time" onChange={(event) => setState((prev) => ({...prev, time: event.target.value}))} value={state.time}>
              <option value="">--</option>
              {filteredSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>
        </div>
      ) : null}

      {step === 2 ? (
        <>
          <div className="booking-mode-row">
            <label>{t.booking.modeLabel}</label>
            <div className="mode-switch">
              <button
                className={state.bookingType === "consultation" ? "mode-btn active" : "mode-btn"}
                onClick={() => setState((prev) => ({...prev, bookingType: "consultation", treatment: ""}))}
                type="button"
              >
                {t.booking.modes.consultation}
              </button>
              <button
                className={state.bookingType === "treatment" ? "mode-btn active" : "mode-btn"}
                onClick={() => setState((prev) => ({...prev, bookingType: "treatment"}))}
                type="button"
              >
                {t.booking.modes.treatment}
              </button>
            </div>
          </div>

          <div className="form-grid">
            {state.bookingType === "treatment" ? (
              <div style={{gridColumn: "1 / -1"}}>
                <label htmlFor="treatment">{t.booking.treatmentLabel}</label>
                <select
                  id="treatment"
                  onChange={(event) => setState((prev) => ({...prev, treatment: event.target.value}))}
                  value={state.treatment}
                >
                  <option value="">--</option>
                  {t.booking.treatmentOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label} ({option.hint})
                    </option>
                  ))}
                </select>
              </div>
            ) : null}

            <div>
              <label htmlFor="name">{t.booking.name}</label>
              <input id="name" onChange={(event) => setState((prev) => ({...prev, name: event.target.value}))} value={state.name} />
            </div>
            <div>
              <label htmlFor="phone">{t.booking.phone}</label>
              <input id="phone" onChange={(event) => setState((prev) => ({...prev, phone: event.target.value}))} value={state.phone} />
            </div>
            <div>
              <label htmlFor="email">{t.booking.email}</label>
              <input
                id="email"
                onChange={(event) => setState((prev) => ({...prev, email: event.target.value}))}
                type="email"
                value={state.email}
              />
            </div>
            <div>
              <label htmlFor="area">{t.booking.areaLabel}</label>
              <select id="area" onChange={(event) => setState((prev) => ({...prev, area: event.target.value}))} value={state.area}>
                <option value="">{t.booking.areaPlaceholder}</option>
                {t.booking.areaOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </>
      ) : null}

      {step === 3 ? (
        <div className="summary-card">
          <h3>{t.booking.summaryTitle}</h3>
          <p>
            <strong>{t.booking.summaryDate}:</strong> {state.date} - {state.time}
          </p>
          <p>
            <strong>{t.booking.summaryMode}:</strong> {state.bookingType === "consultation" ? t.booking.modes.consultation : t.booking.modes.treatment}
          </p>
          <p>
            <strong>{t.booking.summaryTreatment}:</strong> {state.bookingType === "treatment" ? selectedTreatmentLabel : t.booking.modes.consultation}
          </p>
          <p>
            <strong>{t.booking.summaryArea}:</strong> {state.area || t.booking.noArea}
          </p>
          <p>{t.booking.duration}</p>
        </div>
      ) : null}

      {error ? <p className="error">{error}</p> : null}

      <div className="actions">
        {step > 1 ? (
          <button className="link-btn" onClick={() => setStep((prev) => (prev === 1 ? 1 : ((prev - 1) as Step)))} type="button">
            {t.booking.back}
          </button>
        ) : null}

        {step < 3 ? (
          <button
            className="primary-btn"
            onClick={() => {
              if (step === 1 && validateStep1()) setStep(2);
              if (step === 2 && validateStep2()) setStep(3);
            }}
            type="button"
          >
            {t.booking.next}
          </button>
        ) : (
          <button className="primary-btn" disabled={submitting} onClick={submit} type="button">
            {submitting ? t.booking.submitting : t.booking.submit}
          </button>
        )}
      </div>
    </div>
  );
}
