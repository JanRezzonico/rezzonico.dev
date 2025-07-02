import { useTranslations } from 'next-intl'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

type Props = {
  id: string
  image: StaticImageData
  isQuote: boolean
}

export const TestimonialElement = ({ id, image, isQuote }: Props) => {
  const t = useTranslations(`TestimonialsSection.content.${id}`)
  return (
    <div
      className="flex flex-col items-center justify-center gap-4 max-w-md w-full min-w-28 p-4 m-4 border-primary-content sm:border rounded-lg"
      data-aos="slide-up">
      <Image
        src={image}
        alt={t('name')}
        className="w-32 rounded-full aspect-square object-cover"
      />
      <h3 className="text-lg font-semibold">{t('name')}</h3>
      <p className="text-sm text-center">{t('position')}</p>
      <p className="text-base text-center flex items-center">
        <span>
          {isQuote ? (
            <span className="text-primary text-xl">&laquo; </span>
          ) : null}
          {t.rich('text', {
            b: (chunks) => <strong className="text-primary">{chunks}</strong>,
          })}
          {isQuote ? (
            <span className="text-primary text-xl"> &raquo;</span>
          ) : null}
        </span>
      </p>
    </div>
  )
}
