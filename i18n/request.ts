// request.ts
import { getRequestConfig } from 'next-intl/server'
import { getUserLocale } from '../app/services/locale' // Import the function

export default getRequestConfig(async () => {
  // Fetch the user's locale from cookies
  const userLocale = await getUserLocale()

  // Default to English if the preferred locale is neither English nor Italian
  const locale = ['en', 'it'].includes(userLocale) ? userLocale : 'en'

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})
