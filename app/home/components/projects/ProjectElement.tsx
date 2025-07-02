'use client'

import React from 'react'
import { ProjectContent } from './ProjectContent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import Image, { StaticImageData } from 'next/image'

type Project = {
  id: string
  image: StaticImageData
}
type Props = {
  project: Project
  start: boolean
}

export const ProjectElement = ({ project, start }: Props) => {
  const contentClassName = start ? 'timeline-start md:text-end' : 'timeline-end'
  const imageClassName =
    (!start ? 'timeline-start md:text-end' : 'timeline-end') +
    ' mb-10 mx-auto p-2'
  return (
    <li>
      <div className="timeline-middle">
        <FontAwesomeIcon
          icon={faCheckCircle}
          className="w-5 mb-2 text-accent-content"
        />
      </div>
      <div
        className={contentClassName}
        data-aos={`${!start ? 'fade-left' : 'fade-right'}`}>
        <ProjectContent id={project.id} />
      </div>
      <div
        className={imageClassName}
        data-aos={`${!start ? 'fade-right' : 'fade-left'}`}>
        <Image
          src={project.image}
          className="w-full rounded-lg shadow-2xl"
          alt={project.id}
        />
      </div>
      <hr />
    </li>
  )
}
