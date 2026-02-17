"use client";

import {useEffect, useMemo, useState} from "react";
import Image from "next/image";
import {getDictionary, type Locale} from "@/lib/i18n";
import {STOCK_IMAGES} from "@/lib/image-manifest";

type FeedItem = {
  image: string;
  url: string;
};

const INSTAGRAM_URL = "https://www.instagram.com/vivo_aesthetics_uae/";

export function InstagramSection({locale}: {locale: Locale}) {
  const t = getDictionary(locale);
  const [feedItems, setFeedItems] = useState<FeedItem[]>([]);

  const fallbackItems = useMemo(
    () =>
      STOCK_IMAGES.slice(0, 6).map((image, index) => ({
        image,
        url: INSTAGRAM_URL,
        key: `${image}-${index}`
      })),
    []
  );

  useEffect(() => {
    const endpoint = process.env.NEXT_PUBLIC_INSTAGRAM_FEED_URL;
    if (!endpoint) return;

    let cancelled = false;

    fetch(endpoint)
      .then((response) => response.json() as Promise<{items?: FeedItem[]}>)
      .then((data) => {
        if (cancelled || !data.items || data.items.length === 0) return;
        const normalized = data.items
          .filter((item) => typeof item.image === "string" && typeof item.url === "string")
          .slice(0, 6);
        if (normalized.length > 0) setFeedItems(normalized);
      })
      .catch(() => {
        // fallback stays active
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const items = feedItems.length > 0 ? feedItems : fallbackItems;

  return (
    <section className="section" id="instagram">
      <div className="container">
        <h2 className="section-title">{t.instagramSection.title}</h2>
        <p className="section-lead">{t.instagramSection.lead}</p>

        <div className="instagram-grid">
          {items.map((item, index) => (
            <a className="instagram-card" href={item.url} key={`${item.image}-${index}`} rel="noreferrer" target="_blank">
              <Image alt={`Instagram ${index + 1}`} fill loading="lazy" sizes="(max-width: 900px) 33vw, 16vw" src={item.image} />
            </a>
          ))}
        </div>

        <div className="cta-row cta-row-tight">
          <a className="primary-btn" href={INSTAGRAM_URL} rel="noreferrer" target="_blank">
            {t.instagramSection.followCta}
          </a>
          <a className="outline-btn" href={INSTAGRAM_URL} rel="noreferrer" target="_blank">
            {t.instagramSection.viewCta}
          </a>
        </div>
      </div>
    </section>
  );
}
