import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

type Props = {
  icon: IconDefinition
  title: string
  children: React.ReactNode
}

export const SkillsElement = ({ icon, title, children }: Props) => {
  return (
    <div
      className="flex flex-col border border-primary-content rounded-lg p-4 m-4 flex-shrink w-full sm:w-1/3"
      data-aos="slide-up">
      <div className="flex flex-row items-center mb-2 gap-2">
        <FontAwesomeIcon
          icon={icon}
          className="w-12 p-2 color-primary-content aspect-square"
        />
        <span className="font-bold">{title}</span>
      </div>
      <div className="flex flex-row flex-wrap text-base">{children}</div>
    </div>
  )
}
