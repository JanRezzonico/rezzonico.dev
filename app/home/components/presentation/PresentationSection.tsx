import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import jan_rezzonico_hero from '@/public/images/jan_rezzonico_hero.jpg'
import Link from 'next/link'

export const PresentationSection = () => {
  const t = useTranslations('PresentationSection')
  return (
    <div className="hero sm:min-h-[80vh]">
      <div className="hero-content flex-col md:flex-row">
        <div data-aos="fade-right">
          <h1 className="text-4xl">{t('title')}</h1>
          <h2 className="text-2xl">{t('subtitle')}</h2>
          <p className="text-lg">{t('description')}</p>
          <Link
            href={'#skills'}
            className="btn btn-primary my-4 mr-2">
            {t('get_started')}
          </Link>
          <Link
            href={'/contact'}
            className="btn bg-transparent border border-primary my-4">
            {t('contact_me')}
          </Link>
        </div>
        <Image
          data-aos="fade-left"
          src={jan_rezzonico_hero}
          className="max-w-sm sm:w-1/2 sm:aspect-auto w-full aspect-square object-cover rounded-lg shadow-accent-content"
          alt="Jan Rezzonico Hero"
          sizes="(max-width: 640px) 100vw, (min-width: 641px) and (max-width: 1024px) 50vw, 24rem"
          priority={true}
        />
      </div>
    </div>
  )
}
