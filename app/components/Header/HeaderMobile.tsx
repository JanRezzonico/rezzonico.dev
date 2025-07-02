import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'
import { LanguageSwitch } from './LanguageSwitch/LanguageSwitch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

type Props = {
  className?: string
}

export const HeaderMobile = ({ className }: Props) => {
  const t = useTranslations('Header')
  return (
    <header
      className={`flex justify-between navbar bg-base-300/50 mb-4 sticky top-0 z-50 ${className}`}>
      <nav className="flex dropdown">
        <label
          tabIndex={0}
          className="btn btn-ghost m-0"
          aria-label="Menu">
          <FontAwesomeIcon
            icon={faBars}
            className="h-full"
          />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-primary-content rounded-box w-52 left-0"
          aria-label="Navigagzione dropdown">
          <li>
            <Link href={'/'}>{t('home')}</Link>
          </li>
          <li>
            <Link href={'#skills'}>{t('skills')}</Link>
          </li>
          <li>
            <Link href={'#testimonials'}>{t('testimonials')}</Link>
          </li>
          <li>
            <Link href={'#projects'}>{t('projects')}</Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-4 mr-4">
        <LanguageSwitch />
        <Link
          className="btn btn-primary w-32"
          href={'/contact'}>
          {t('contact')}
        </Link>
      </div>
    </header>
  )
}
