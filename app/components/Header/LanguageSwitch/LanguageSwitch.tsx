'use client'

import React, { useState, useEffect } from 'react'
import { getUserLocale, setUserLocale } from '../../../services/locale'
import { LanguageButton } from './LanguageButton'

export const LanguageSwitch = () => {
  const [locale, setLocale] = useState<string>('')

  useEffect(() => {
    getUserLocale().then(setLocale)
  }, [])

  const changeLocale = (newLocale: string) => {
    setUserLocale(newLocale).then(() => setLocale(newLocale))
  }

  return (
    <div className="flex rounded-full w-20 h-8 border border-primary">
      <LanguageButton
        code="en"
        onChange={changeLocale}
        locale={locale}
      />
      <LanguageButton
        code="it"
        onChange={changeLocale}
        locale={locale}
      />
    </div>
  )
}
