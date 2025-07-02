import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const SocialIcon = ({ icon, link }: { icon: IconDefinition; link: string }) => {
  return (
    <div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer">
        <FontAwesomeIcon
          icon={icon}
          size="2xl"
          className="text-primary"
        />
      </a>
    </div>
  )
}

export const Socials = () => {
  return (
    <div
      className="flex gap-4"
      data-aos="fade-up">
      <SocialIcon
        icon={faGithub}
        link={'https://github.com/JanRezzonico'}
      />
      <SocialIcon
        icon={faLinkedin}
        link={'https://www.linkedin.com/in/jan-rezzonico-893b65223'}
      />
    </div>
  )
}
