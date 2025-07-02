import React from 'react'
import { SkillsElement } from './SkillsElement'
import {
  faCode,
  faServer,
  faTools,
  faDatabase,
  faPlus,
  faTerminal,
} from '@fortawesome/free-solid-svg-icons'
import { useTranslations } from 'next-intl'
import { Section } from '@/app/components/common/Section'

export const SkillsSection = () => {
  const t = useTranslations('SkillsSection')
  return (
    <Section
      title={t('title')}
      subtitle={t('subtitle')}
      id="skills">
      <div className="flex flex-row flex-wrap justify-center">
        <SkillsElement
          icon={faCode}
          title={t('frontend')}>
          <p>
            React, React Native, Next.js, Vite, HTML, CSS, JavaScript,
            TypeScript - Websites, PWAs, Mobile Apps
          </p>
        </SkillsElement>
        <SkillsElement
          icon={faServer}
          title={t('backend')}>
          <p>Node.js, Express.js, PHP - REST API, WebSocket</p>
        </SkillsElement>
        <SkillsElement
          icon={faDatabase}
          title={t('database')}>
          <p>MongoDB & MySQL - Prisma, Mongoose, Sequelize, SQL</p>
        </SkillsElement>
        <SkillsElement
          icon={faTerminal}
          title={t('os')}>
          <p>Linux, Windows, macOS</p>
        </SkillsElement>
        <SkillsElement
          icon={faTools}
          title={t('tools')}>
          <p>Git, GitHub, Docker, VirtualBox, Jira, Office Suite</p>
        </SkillsElement>
        <SkillsElement
          icon={faPlus}
          title={t('other')}>
          <p>Bash, Java, C#, Arduino, Servers, Networks</p>
        </SkillsElement>
      </div>
    </Section>
  )
}
