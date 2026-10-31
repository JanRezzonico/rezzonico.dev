export const locales = ["en", "it"] as const;
export const defaultLocale = "en";

export type Locale = (typeof locales)[number];

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);
