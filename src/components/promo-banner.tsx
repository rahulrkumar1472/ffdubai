"use client";

import Link from "next/link";
import {useEffect, useState} from "react";

const DISMISS_KEY = "ffdubai_banner_dismissed_v1";
const DISMISS_MS = 24 * 60 * 60 * 1000;
const OFFER_END_ISO = "2026-04-10T23:59:59+04:00";

type PromoBannerProps = {
  locale: "en" | "ar";
  text: string;
  dismissLabel: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
};

function formatCountdown(locale: "en" | "ar") {
  const targetMs = new Date(OFFER_END_ISO).getTime();
  const now = Date.now();
  const diff = Math.max(0, targetMs - now);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  if (locale === "ar") {
    return `ينتهي خلال ${days} يوم ${hours} ساعة ${minutes} دقيقة`;
  }

  return `Ends in ${days}d ${hours}h ${minutes}m`;
}

export function PromoBanner({
  locale,
  text,
  dismissLabel,
  ctaLabel,
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref
}: PromoBannerProps) {
  const [visible, setVisible] = useState(false);
  const [countdown, setCountdown] = useState(() => formatCountdown(locale));

  useEffect(() => {
    try {
      const lastDismissed = Number(window.localStorage.getItem(DISMISS_KEY) ?? "0");
      const dismissed = Number.isFinite(lastDismissed) && Date.now() - lastDismissed < DISMISS_MS;
      if (!dismissed) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    if (!visible) return;

    setCountdown(formatCountdown(locale));
    const intervalId = window.setInterval(() => {
      setCountdown(formatCountdown(locale));
    }, 60000);

    return () => window.clearInterval(intervalId);
  }, [locale, visible]);

  if (!visible) return null;

  return (
    <div className="seasonal-banner" role="note">
      <div className="container seasonal-banner-inner">
        <div className="seasonal-banner-copy">
          <p>{text}</p>
          <p className="seasonal-banner-countdown">{countdown}</p>
        </div>

        <div className="seasonal-banner-actions">
          <Link className="seasonal-banner-cta" href={ctaHref}>
            {ctaLabel}
          </Link>
          <Link className="seasonal-banner-cta seasonal-banner-cta-secondary" href={secondaryCtaHref}>
            {secondaryCtaLabel}
          </Link>
          <button
            aria-label={dismissLabel}
            className="seasonal-banner-close"
            onClick={() => {
              try {
                window.localStorage.setItem(DISMISS_KEY, String(Date.now()));
              } catch {
                // noop
              }
              setVisible(false);
            }}
            type="button"
          >
            <span aria-hidden>×</span>
          </button>
        </div>
      </div>
    </div>
  );
}
