import React from 'react'
import { TestimonialElement } from './TestimonialElement'
import { useTranslations } from 'next-intl'
import { Section } from '@/app/components/common/Section'
import ict from '@/public/images/testimonials/ict.svg'
import getsociable from '@/public/images/testimonials/getsociable.webp'

export const TestimonialsSection = () => {
  const t = useTranslations('TestimonialsSection')
  return (
    <Section
      title={t('title')}
      subtitle={t('subtitle')}
      id="testimonials">
      <div className="flex justify-center flex-wrap">
        <TestimonialElement
          id="getsociable"
          image={getsociable}
          isQuote={true}
        />
        <TestimonialElement
          id="ict"
          image={ict}
          isQuote={false}
        />
      </div>
    </Section>
  )
}
