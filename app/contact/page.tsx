'use client'

import { useTranslations } from 'next-intl'
import React, { useRef } from 'react'
import { Toast } from '../components/Toast/Toast'
import { EmailCopy } from './components/EmailCopy'
import { Socials } from './components/Socials'

const ContactPage = () => {
  const t = useTranslations('ContactPage')
  const toastRef = useRef<HTMLDivElement | null>(null)
  return (
    <>
      <Toast ref={toastRef} />
      <div className="flex justify-center items-center gap-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1
            className="text-3xl"
            data-aos="fade-down">
            {t('title')}
          </h1>
          <h2
            className="text-xl"
            data-aos="fade-down">
            {t('subtitle')}
          </h2>
          <EmailCopy toastRef={toastRef} />
          <Socials />
        </div>
      </div>
    </>
  )
}

export default ContactPage
