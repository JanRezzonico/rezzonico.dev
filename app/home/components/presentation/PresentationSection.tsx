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
            className="btn btn-primary rounded my-4 mr-2">
            {t('get_started')}
          </Link>
          <Link
            href={'/contact'}
            className="btn bg-transparent border border-primary rounded my-4">
            {t('contact_me')}
          </Link>
        </div>
        <div
          data-aos="fade-left"
          className="hover-3d max-w-sm sm:w-1/2 w-full">
          <figure>
            <Image
              src={jan_rezzonico_hero}
              alt="Jan Rezzonico Hero"
              className="rounded-lg shadow-accent-content object-cover aspect-square sm:aspect-auto"
              sizes="(max-width: 640px) 100vw, (min-width: 641px) and (max-width: 1024px) 50vw, 24rem"
              priority={true}
            />
          </figure>
          {/* 8 empty divs needed for the 3D effect */}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}
