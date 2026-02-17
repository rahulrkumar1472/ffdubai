"use client";

import {useState} from "react";
import Image from "next/image";

type ResultsGalleryProps = {
  images: string[];
  locale: "en" | "ar";
};

export function ResultsGallery({images, locale}: ResultsGalleryProps) {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  if (images.length === 0) {
    return null;
  }

  return (
    <>
      <div className="area-grid" style={{gridTemplateColumns: "repeat(3, minmax(0, 1fr))"}}>
        {images.map((image, index) => (
          <button
            className="area-card"
            key={image}
            onClick={() => setActiveImage(image)}
            style={{cursor: "pointer", border: "1px solid var(--line)", padding: 0, background: "#fff"}}
            type="button"
          >
            <div className="area-thumb" style={{height: "190px"}}>
              <Image
                alt={locale === "ar" ? `نتيجة ${index + 1}` : `Result ${index + 1}`}
                fill
                sizes="(max-width: 900px) 100vw, 33vw"
                src={image}
              />
            </div>
          </button>
        ))}
      </div>

      {activeImage ? (
        <div
          aria-modal="true"
          onClick={() => setActiveImage(null)}
          role="dialog"
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(10, 24, 41, 0.82)",
            zIndex: 80,
            display: "grid",
            placeItems: "center",
            padding: "1rem"
          }}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            style={{
              width: "min(980px, 95vw)",
              borderRadius: "1rem",
              overflow: "hidden",
              border: "1px solid #7ea7d1",
              boxShadow: "0 18px 50px rgba(0,0,0,0.35)",
              background: "#fff"
            }}
          >
            <div style={{position: "relative", width: "100%", height: "70vh", minHeight: "420px"}}>
              <Image alt="Result" fill sizes="100vw" src={activeImage} style={{objectFit: "contain", background: "#f4f8fc"}} />
            </div>
            <div style={{padding: "0.75rem", textAlign: "center"}}>
              <button className="primary-btn" onClick={() => setActiveImage(null)} type="button">
                {locale === "ar" ? "إغلاق" : "Close"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
