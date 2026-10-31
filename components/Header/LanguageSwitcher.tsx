"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { locales } from "@/libs/i18n/config";
import { Locale } from "@/libs/i18n/dictionaries";
import { anchorChangeEvent } from "@/components/ScrollAnchor";

function localizedPath(pathname: string, target: string) {
  const segments = pathname.split("/"); // ['', 'en', 'whatever', 'path']
  segments[1] = target;
  return segments.join("/") || "/";
}

export function LanguageSwitcher({ currentLang }: { currentLang: Locale }) {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();
    window.addEventListener(anchorChangeEvent, updateHash);
    window.addEventListener("hashchange", updateHash);
    return () => {
      window.removeEventListener(anchorChangeEvent, updateHash);
      window.removeEventListener("hashchange", updateHash);
    };
  }, []);

  return (
    <nav
      aria-label="Language"
      className="flex min-w-25 rounded-full border border-primary p-1"
    >
      {locales.map((locale) => {
        const isActive = locale === currentLang;
        return (
          <Link
            key={locale}
            href={`${localizedPath(pathname, locale)}${hash}`}
            hrefLang={locale}
            lang={locale}
            aria-current={isActive ? "true" : undefined}
            className={`flex-1 rounded-full px-3 py-1 text-center text-sm font-semibold uppercase tracking-wide transition-colors ${
              isActive
                ? "bg-primary text-primary-content shadow"
                : "text-base-content/60 hover:text-base-content"
            }`}
          >
            {locale}
          </Link>
        );
      })}
    </nav>
  );
}
