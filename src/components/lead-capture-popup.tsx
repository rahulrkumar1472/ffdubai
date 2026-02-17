"use client";

import {useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {VALID_TIME_SLOTS} from "@/lib/time-slots";
import {getDictionary, type Locale} from "@/lib/i18n";
import {STOCK_IMAGES} from "@/lib/image-manifest";

type LeadCapturePopupProps = {
  locale: Locale;
};

type BookingApiResponse = {
  ok: boolean;
  referenceId?: string;
  message?: string;
};

const SESSION_KEY = "ffdubai_offer_popup_seen";
const POPUP_MS = 24 * 60 * 60 * 1000;

function toDateString(value: Date) {
  const yyyy = value.getFullYear();
  const mm = String(value.getMonth() + 1).padStart(2, "0");
  const dd = String(value.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function getDubaiNow() {
  const local = new Date().toLocaleString("en-US", {timeZone: "Asia/Dubai"});
  return new Date(local);
}

function getNextSlot() {
  const nowDubai = getDubaiNow();
  const nowMinutes = nowDubai.getHours() * 60 + nowDubai.getMinutes();

  const todaySlot = VALID_TIME_SLOTS.find((slot) => {
    const [hh, mm] = slot.split(":").map(Number);
    return hh * 60 + mm > nowMinutes;
  });

  if (todaySlot) {
    return {
      date: toDateString(nowDubai),
      time: todaySlot
    };
  }

  const tomorrow = new Date(nowDubai);
  tomorrow.setDate(tomorrow.getDate() + 1);

  return {
    date: toDateString(tomorrow),
    time: VALID_TIME_SLOTS[0]
  };
}

export function LeadCapturePopup({locale}: LeadCapturePopupProps) {
  const t = getDictionary(locale);
  const base = "";
  const nameId = "lead-name-" + locale;
  const emailId = "lead-email-" + locale;
  const phoneId = "lead-phone-" + locale;
  const popupImage =
    STOCK_IMAGES.find((image) => image.includes("doctor-measuring-woman-waist")) ||
    STOCK_IMAGES.find((image) => image.includes("cryolipolysis-hardware")) ||
    STOCK_IMAGES[0] ||
    null;
  const trustPills = t.hero.trustPills.slice(0, 3);

  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [referenceId, setReferenceId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const markSeen = () => {
      try {
        window.localStorage.setItem(SESSION_KEY, String(Date.now()));
      } catch {
        // noop
      }
    };

    const dismissedInWindow = (() => {
      try {
        const value = Number(window.localStorage.getItem(SESSION_KEY) ?? "0");
        return Number.isFinite(value) && Date.now() - value < POPUP_MS;
      } catch {
        return false;
      }
    })();

    if (dismissedInWindow) return;

    const openPopup = () => {
      setOpen((prev) => {
        if (prev) return prev;
        markSeen();
        return true;
      });
    };

    const timeoutId = window.setTimeout(openPopup, 12000);
    const isDesktop = window.matchMedia("(pointer: fine)").matches && window.innerWidth >= 900;
    const onMouseLeave = (event: MouseEvent) => {
      if (event.clientY <= 0) openPopup();
    };

    if (isDesktop) {
      document.addEventListener("mouseleave", onMouseLeave);
    }

    return () => {
      window.clearTimeout(timeoutId);
      if (isDesktop) {
        document.removeEventListener("mouseleave", onMouseLeave);
      }
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, [open]);

  if (!open) return null;

  const submitLead = async () => {
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setError(t.leadPopup.requiredError);
      return;
    }

    try {
      setSubmitting(true);
      setError("");
      const slot = getNextSlot();

      const response = await fetch("/api/book", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          locale,
          bookingType: "consultation",
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim(),
          area: null,
          date: slot.date,
          time: slot.time
        })
      });

      const data = (await response.json()) as BookingApiResponse;

      if (!response.ok || !data.ok || !data.referenceId) {
        setError(data.message || t.leadPopup.submitError);
        return;
      }

      setReferenceId(data.referenceId);
    } catch {
      setError(t.leadPopup.submitError);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="lead-popup-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-popup-title"
      onClick={() => setOpen(false)}
    >
      <article className="lead-popup-card" onClick={(event) => event.stopPropagation()}>
        <button aria-label={t.leadPopup.dismiss} className="lead-popup-close" onClick={() => setOpen(false)} type="button">
          <span aria-hidden>×</span>
        </button>

        {referenceId ? (
          <div className="lead-popup-success">
            <h2 id="lead-popup-title">{t.leadPopup.successTitle}</h2>
            <p>{t.leadPopup.successBody}</p>
            <p className="success-reference">
              <strong>{t.booking.successReference}:</strong> {referenceId}
            </p>
            <div className="cta-row cta-row-tight">
              <Link className="primary-btn" href={`${base}/book`}>
                {t.leadPopup.successCta}
              </Link>
              <a className="outline-btn" href="https://wa.me/971521231743" rel="noreferrer" target="_blank">
                {t.leadPopup.successWhatsappCta}
              </a>
            </div>
          </div>
        ) : (
          <div>
            {popupImage ? (
              <div className="lead-popup-image">
                <Image
                  alt={locale === "ar" ? "عرض علاج تجميد الدهون في دبي" : "Fat freezing Ramadan special offer"}
                  fill
                  priority
                  sizes="(max-width: 560px) 100vw, 440px"
                  src={popupImage}
                />
                <span className="lead-popup-image-overlay" />
              </div>
            ) : null}

            <h2 id="lead-popup-title">{t.leadPopup.title}</h2>
            <p className="section-lead">{t.leadPopup.subtitle}</p>
            <p className="lead-popup-scarcity">{t.leadPopup.scarcity}</p>

            <ul className="lead-popup-trust">
              {trustPills.map((pill) => (
                <li key={pill}>{pill}</li>
              ))}
            </ul>

            <div className="lead-popup-grid">
              <div>
                <label htmlFor={nameId}>{t.leadPopup.name}</label>
                <input id={nameId} onChange={(event) => setName(event.target.value)} value={name} />
              </div>
              <div>
                <label htmlFor={emailId}>{t.leadPopup.email}</label>
                <input id={emailId} onChange={(event) => setEmail(event.target.value)} type="email" value={email} />
              </div>
              <div>
                <label htmlFor={phoneId}>{t.leadPopup.phone}</label>
                <input id={phoneId} onChange={(event) => setPhone(event.target.value)} value={phone} />
              </div>
            </div>

            {error ? <p className="error">{error}</p> : null}

            <div className="cta-row cta-row-tight">
              <button className="primary-btn" disabled={submitting} onClick={submitLead} type="button">
                {submitting ? t.booking.submitting : t.leadPopup.submit}
              </button>
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
