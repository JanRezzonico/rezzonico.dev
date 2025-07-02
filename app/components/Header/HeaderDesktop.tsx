import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'
import { LanguageSwitch } from './LanguageSwitch/LanguageSwitch'

type Props = {
  className?: string
}

export const HeaderDesktop = ({ className }: Props) => {
  const t = useTranslations('Header')
  return (
    <header
      className={`flex navbar bg-base-300/50 mb-4 sticky top-0 z-50 ${className}`}>
      <div className="flex grow-0 shrink-0 basis-1/5 justify-center items-center">
        <Link
          href={'/'}
          className="flex flex-col justify-center text-center">
          <span className="text-sm">{t('slogan')}</span>
          <span className="font-bold">{t('name')}</span>
        </Link>
      </div>
      <nav className="flex grow-1 basis-3/5 justify-center items-center gap-4">
        <Link href={'/'}>{t('home')}</Link>
        <Link href={'/#skills'}>{t('skills')}</Link>
        <Link href={'/#testimonials'}>{t('testimonials')}</Link>
        <Link href={'/#projects'}>{t('projects')}</Link>
      </nav>

      <div className="flex grow-0 shrink-0 basis-1/5 justify-center items-center gap-4">
        <LanguageSwitch />
        <Link
          className="btn btn-primary"
          href={'/contact'}>
          {t('contact')}
        </Link>
      </div>
    </header>
  )
}
