import React from 'react'

type Props = {
  title: string
  subtitle: string
  children: React.ReactNode
  id: string
}

export const Section = ({ title, subtitle, id, children }: Props) => {
  return (
    <div
      id={id}
      className="m-4 mb-16">
      <div
        className="flex flex-col w-full justify-center items-center gap-4"
        data-aos="slide-up">
        <span className="border border-primary-content rounded-full text-base w-fit px-2 text-center shadow shadow-accent-content">
          {title}
        </span>
        <span className="text-3xl text-center">{subtitle}</span>
      </div>
      {children}
    </div>
  )
}
