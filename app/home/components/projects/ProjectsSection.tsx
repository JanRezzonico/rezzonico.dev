'use client'

import { useTranslations } from 'next-intl'
import React from 'react'
import { ProjectElement } from './ProjectElement'
import cleanprogresstracker from '@/public/images/projects/cleanprogresstracker.png'
import workoutracker from '@/public/images/projects/workoutracker.webp'
import movie_survey from '@/public/images/projects/movie_survey.webp'
import db_comparison from '@/public/images/projects/db_comparison.webp'
import phatris from '@/public/images/projects/phatris.webp'
import guesstheword from '@/public/images/projects/guesstheword.webp'
import bmp_manipulator from '@/public/images/projects/bmp_manipulator.webp'
// import nove_erre from '@/public/images/projects/9erre.webp'
import { Section } from '@/app/components/common/Section'
import useWindowSize from '@/app/components/common/useWindowSize'

export const ProjectsSection = () => {
  const isDesktop = useWindowSize('md')

  const t = useTranslations('ProjectsSection')
  const projects = [
    { id: 'guess_the_word', image: guesstheword },
    { id: 'phatris', image: phatris },
    // { id: '9erre', image: nove_erre},
    { id: 'bmp_manipulator', image: bmp_manipulator },
    { id: 'movie_survey', image: movie_survey },
    { id: 'db_comparison', image: db_comparison },
    { id: 'addiction_recovery', image: cleanprogresstracker },
    { id: 'workoutracker', image: workoutracker },
  ]
  return (
    <Section
      title={t('title')}
      subtitle={t('subtitle')}
      id="projects">
      <span className="flex flex-1 justify-center text-base">
        {t('not_in_chronological_order')}
      </span>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-8">
        {projects.map((project, index) => {
          const start = isDesktop ? index % 2 === 0 : true
          return (
            <ProjectElement
              project={project}
              start={start}
              key={project.id}
            />
          )
        })}
      </ul>
    </Section>
  )
}
