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
      <div className="results-grid">
        {images.map((image, index) => (
          <button
            aria-label={locale === "ar" ? `عرض النتيجة ${index + 1}` : `Open result ${index + 1}`}
            className="result-card"
            key={image}
            onClick={() => setActiveImage(image)}
            type="button"
          >
            <div className="result-thumb">
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
        <div aria-modal="true" className="results-lightbox" onClick={() => setActiveImage(null)} role="dialog">
          <div className="results-lightbox-panel" onClick={(event) => event.stopPropagation()}>
            <div className="results-lightbox-image">
              <Image alt="Result" fill sizes="100vw" src={activeImage} style={{objectFit: "contain", background: "#f4f8fc"}} />
            </div>
            <div className="results-lightbox-actions">
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
