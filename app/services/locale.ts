'use server'

import { cookies, headers } from 'next/headers'

const COOKIE_NAME = 'FAVORITE_LOCALE'
const SUPPORTED_LANGUAGES = ['en', 'it']

export async function getUserLocale(): Promise<string> {
  // Check if the locale is stored in the cookie
  const cookie = (await cookies()).get(COOKIE_NAME)
  if (cookie) {
    return cookie.value
  }

  // Retrieve the 'Accept-Language' header
  const acceptLanguageHeader = (await headers()).get('accept-language')
  if (!acceptLanguageHeader) {
    return 'en'
  }

  // Parse the 'Accept-Language' header to extract language preferences
  const languages = acceptLanguageHeader
    .split(',')
    .map((lang) => lang.split(';')[0].split('-')[0])

  // Filter out unsupported languages
  const supportedLanguages = languages.filter((lang) =>
    SUPPORTED_LANGUAGES.includes(lang)
  )

  // Determine the locale based on the user's language preferences
  if (supportedLanguages.length === 0) {
    return 'en' // Default to English if no supported languages are found
  }

  // If both 'en' and 'it' are present, prioritize the first one
  if (supportedLanguages.includes('en') && supportedLanguages.includes('it')) {
    const firstLang = languages[0]
    return SUPPORTED_LANGUAGES.includes(firstLang) ? firstLang : 'en'
  }

  // Return the first supported language
  return supportedLanguages[0]
}

export async function setUserLocale(locale: string): Promise<void> {
  // Validate the locale before setting it
  if (!SUPPORTED_LANGUAGES.includes(locale)) {
    throw new Error(`Unsupported locale: ${locale}`)
  }
  ;(await cookies()).set(COOKIE_NAME, locale)
}
