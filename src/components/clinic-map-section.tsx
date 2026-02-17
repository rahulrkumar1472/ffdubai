"use client";

import {FormEvent, useEffect, useMemo, useState} from "react";
import {getDictionary, type Locale} from "@/lib/i18n";

const CLINIC_COORDS = {
  lat: 25.2018,
  lng: 55.245
};

const CLINIC_ADDRESS = "Jumeira St - Jumeirah - Jumeirah 1 - Dubai - United Arab Emirates";
const MAPS_APP_LINK = "https://maps.app.goo.gl/nb9w9JxUo8nre2Ef9";

function toRadians(value: number) {
  return (value * Math.PI) / 180;
}

function getDistanceKm(fromLat: number, fromLng: number, toLat: number, toLng: number) {
  const earthRadiusKm = 6371;
  const dLat = toRadians(toLat - fromLat);
  const dLng = toRadians(toLng - fromLng);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(fromLat)) * Math.cos(toRadians(toLat)) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return earthRadiusKm * c;
}

function buildDirectionsUrl(origin: string) {
  const base = "https://www.google.com/maps/dir/?api=1";
  const destination = encodeURIComponent(CLINIC_ADDRESS);

  if (!origin.trim()) {
    return `${base}&destination=${destination}`;
  }

  return `${base}&origin=${encodeURIComponent(origin.trim())}&destination=${destination}`;
}

export function ClinicMapSection({locale}: {locale: Locale}) {
  const t = getDictionary(locale);
  const [distance, setDistance] = useState<number | null>(null);
  const [originInput, setOriginInput] = useState("");
  const [directionsUrl, setDirectionsUrl] = useState<string>(MAPS_APP_LINK);

  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const km = getDistanceKm(position.coords.latitude, position.coords.longitude, CLINIC_COORDS.lat, CLINIC_COORDS.lng);
        setDistance(km);
      },
      () => {
        setDistance(null);
      },
      {enableHighAccuracy: false, maximumAge: 300000, timeout: 7000}
    );
  }, []);

  const distanceText = useMemo(() => {
    if (distance === null) return t.mapSection.locationPending;
    const rounded = new Intl.NumberFormat(locale === "ar" ? "ar-AE" : "en-AE", {maximumFractionDigits: 1}).format(distance);
    return `${t.mapSection.distanceLabel}: ${rounded} km`;
  }, [distance, locale, t.mapSection.distanceLabel, t.mapSection.locationPending]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDirectionsUrl(buildDirectionsUrl(originInput));
  };

  return (
    <section className="section section-muted" id="clinic-location">
      <div className="container">
        <div className="map-section-grid">
          <article className="card map-details-card">
            <h2 className="section-title">{t.mapSection.title}</h2>
            <p className="section-lead">{t.mapSection.lead}</p>

            <p className="map-distance">{distanceText}</p>

            <ul className="map-trust-list">
              {t.mapSection.trustItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="map-meta">
              <p>
                <strong>{t.mapSection.addressLabel}:</strong> {t.trust.address}
              </p>
              <p>
                <strong>{t.mapSection.hoursLabel}:</strong> {t.trust.hours}
              </p>
              <p>
                <strong>{t.mapSection.phoneLabel}:</strong> +971521231743
              </p>
            </div>

            <form className="map-direction-form" onSubmit={onSubmit}>
              <label htmlFor={`map-origin-${locale}`}>{t.mapSection.directionsInputLabel}</label>
              <div className="map-direction-row">
                <input
                  id={`map-origin-${locale}`}
                  onChange={(event) => setOriginInput(event.target.value)}
                  placeholder={t.mapSection.directionsInputPlaceholder}
                  value={originInput}
                />
                <button className="outline-btn" type="submit">
                  {t.mapSection.directionsBuilderCta}
                </button>
              </div>
            </form>

            <div className="cta-row cta-row-tight">
              <a className="primary-btn" href={directionsUrl} rel="noreferrer" target="_blank">
                {t.mapSection.directionsCta}
              </a>
              <a className="outline-btn" href="https://wa.me/971521231743" rel="noreferrer" target="_blank">
                {t.mapSection.whatsappCta}
              </a>
              <a className="outline-btn" href="tel:+971521231743">
                {t.mapSection.callCta}
              </a>
            </div>
          </article>

          <article className="card map-card">
            <iframe
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Jumeira%20St%20-%20Jumeirah%20-%20Jumeirah%201%20-%20Dubai%20-%20United%20Arab%20Emirates&output=embed"
              title={t.mapSection.title}
            />
            <a className="map-inline-link" href={MAPS_APP_LINK} rel="noreferrer" target="_blank">
              {t.mapSection.directionsCta}
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
