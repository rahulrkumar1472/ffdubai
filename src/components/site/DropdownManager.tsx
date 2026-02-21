"use client";

import {useEffect} from "react";

export function DropdownManager() {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".seo-site-header");
    if (!header) return;

    const desktopSelector = "details.nav-dropdown-details";
    const mobileSelector = "details.seo-mobile-menu";

    function closeAllExcept(except: HTMLDetailsElement | null) {
      const allDetails = header!.querySelectorAll<HTMLDetailsElement>(
        `${desktopSelector}, ${mobileSelector}`
      );
      for (const el of allDetails) {
        if (el !== except) el.removeAttribute("open");
      }
    }

    function handleToggle(event: Event) {
      const target = event.target as HTMLDetailsElement;
      if (target.open) closeAllExcept(target);
    }

    function handleClickOutside(event: PointerEvent) {
      if (!header!.contains(event.target as Node)) {
        closeAllExcept(null);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") closeAllExcept(null);
    }

    function handleMobileLinkClick(event: MouseEvent) {
      if ((event.target as HTMLElement).closest("a")) {
        const menu = header!.querySelector<HTMLDetailsElement>(mobileSelector);
        if (menu) menu.removeAttribute("open");
      }
    }

    const allDetails = header.querySelectorAll<HTMLDetailsElement>(
      `${desktopSelector}, ${mobileSelector}`
    );
    for (const el of allDetails) {
      el.addEventListener("toggle", handleToggle);
    }

    const mobilePanel = header.querySelector(".seo-mobile-panel");
    if (mobilePanel) {
      mobilePanel.addEventListener("click", handleMobileLinkClick as EventListener);
    }

    document.addEventListener("pointerdown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      for (const el of allDetails) {
        el.removeEventListener("toggle", handleToggle);
      }
      if (mobilePanel) {
        mobilePanel.removeEventListener("click", handleMobileLinkClick as EventListener);
      }
      document.removeEventListener("pointerdown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return null;
}
