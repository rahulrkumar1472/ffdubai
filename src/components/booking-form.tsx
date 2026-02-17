"use client";

import {useMemo, useState} from "react";
import {VALID_TIME_SLOTS} from "@/lib/time-slots";
import {getDictionary, type Locale} from "@/lib/i18n";

type FormState = {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  date: "",
  time: ""
};

export function BookingForm({locale}: {locale: Locale}) {
  const t = getDictionary(locale);
  const [step, setStep] = useState<1 | 2>(1);
  const [state, setState] = useState<FormState>(initialState);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const minDate = useMemo(() => {
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  }, []);

  const validateStep1 = () => {
    if (!state.name.trim() || !state.phone.trim() || !state.email.trim()) {
      setError(t.booking.required);
      return false;
    }

    const emailRegex = /^\S+@\S+\.\S+$/;

    if (!emailRegex.test(state.email)) {
      setError(t.booking.invalidEmail);
      return false;
    }

    setError("");
    return true;
  };

  const validateStep2 = () => {
    if (!state.date || !state.time) {
      setError(t.booking.required);
      return false;
    }

    if (!VALID_TIME_SLOTS.includes(state.time)) {
      setError(t.booking.invalidTime);
      return false;
    }

    setError("");
    return true;
  };

  const submit = async () => {
    if (!validateStep2()) return;

    try {
      setSubmitting(true);
      const response = await fetch("/api/book", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({...state, locale})
      });

      const data = (await response.json()) as {ok: boolean; message?: string};

      if (!response.ok || !data.ok) {
        setError(data.message || t.booking.required);
        return;
      }

      setSuccess(true);
      setState(initialState);
    } catch {
      setError(t.booking.required);
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="success-box">
        <h3>{t.booking.successTitle}</h3>
        <p>{t.booking.successMessage}</p>
        <div className="actions">
          <a className="primary-btn" href="https://wa.me/971521231743" rel="noreferrer" target="_blank">
            {t.booking.whatsappCta}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="form-wrap">
      <h3 style={{marginTop: 0}}>{step === 1 ? t.booking.step1 : t.booking.step2}</h3>
      <p style={{color: "var(--muted)", marginTop: 0}}>{t.booking.subtitle}</p>

      {step === 1 ? (
        <div className="form-grid">
          <div>
            <label htmlFor="name">{t.booking.name}</label>
            <input
              id="name"
              value={state.name}
              onChange={(event) => setState((prev) => ({...prev, name: event.target.value}))}
            />
          </div>
          <div>
            <label htmlFor="phone">{t.booking.phone}</label>
            <input
              id="phone"
              value={state.phone}
              onChange={(event) => setState((prev) => ({...prev, phone: event.target.value}))}
            />
          </div>
          <div style={{gridColumn: "1 / -1"}}>
            <label htmlFor="email">{t.booking.email}</label>
            <input
              id="email"
              type="email"
              value={state.email}
              onChange={(event) => setState((prev) => ({...prev, email: event.target.value}))}
            />
          </div>
        </div>
      ) : (
        <div className="form-grid">
          <div>
            <label htmlFor="date">{t.booking.date}</label>
            <input
              id="date"
              min={minDate}
              type="date"
              value={state.date}
              onChange={(event) => setState((prev) => ({...prev, date: event.target.value}))}
            />
          </div>
          <div>
            <label htmlFor="time">{t.booking.time}</label>
            <select
              id="time"
              value={state.time}
              onChange={(event) => setState((prev) => ({...prev, time: event.target.value}))}
            >
              <option value="">--</option>
              {VALID_TIME_SLOTS.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {error ? <p className="error">{error}</p> : null}

      <div className="actions">
        {step === 2 ? (
          <button className="link-btn" onClick={() => setStep(1)} type="button">
            {t.booking.back}
          </button>
        ) : null}

        {step === 1 ? (
          <button
            className="primary-btn"
            onClick={() => {
              if (validateStep1()) setStep(2);
            }}
            type="button"
          >
            {t.booking.next}
          </button>
        ) : (
          <button className="primary-btn" disabled={submitting} onClick={submit} type="button">
            {submitting ? "..." : t.booking.submit}
          </button>
        )}
      </div>
    </div>
  );
}
