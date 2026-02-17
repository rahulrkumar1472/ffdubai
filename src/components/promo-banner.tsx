"use client";

import Link from "next/link";
import {useEffect, useState} from "react";

const DISMISS_KEY = "ffdubai_banner_dismissed_v1";
const DISMISS_MS = 24 * 60 * 60 * 1000;

type PromoBannerProps = {
  text: string;
  dismissLabel: string;
  ctaLabel: string;
  ctaHref: string;
};

export function PromoBanner({text, dismissLabel, ctaLabel, ctaHref}: PromoBannerProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const lastDismissed = Number(window.localStorage.getItem(DISMISS_KEY) ?? "0");
      const dismissed = Number.isFinite(lastDismissed) && Date.now() - lastDismissed < DISMISS_MS;
      if (!dismissed) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="seasonal-banner" role="note">
      <div className="container seasonal-banner-inner">
        <p>{text}</p>

        <div className="seasonal-banner-actions">
          <Link className="seasonal-banner-cta" href={ctaHref}>
            {ctaLabel}
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
