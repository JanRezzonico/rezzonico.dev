import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare, faHeartBroken, faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslations } from 'next-intl'
import React from 'react'

type Props = {
  id: string
}
export const ProjectContent = ({ id }: Props) => {
  const t = useTranslations(`ProjectsSection.content.${id}`)
  return (
    <div className="">
      <div className="hero">
        <div className="hero-content flex-col w-full">
          <div>
            <div className="flex flex-row items-end justify-between">
              <h2 className="text-2xl">{t('title')}</h2>
              <span className="text-base text-accent-content">{t('year')}</span>
            </div>
            <hr />
            <span className="text-base text-accent-content">{t('story')}</span>
            <p>{t('description')}</p>
            <div className="flex flex-row justify-end gap-4 items-center py-4">
              <div>
              {t('source_link') ? (
                <a
                  href={t('source_link')}
                  className="badge badge-lg badge-success"
                  target="_blank"
                  rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub}/>
                    open source
                    <FontAwesomeIcon icon={faLink} />
                </a>
              ) : 
              <span className='badge badge-lg badge-error'>
                    <FontAwesomeIcon icon={faGithub}/>
                closed source
              <FontAwesomeIcon icon={faHeartBroken} />
              </span>
              }
              </div>
              <div>
                {
                  t('extra_link') && t('extra_text') ? (
                    <a
                      href={t('extra_link')}
                      className="badge badge-lg badge-primary"
                      target="_blank"
                      rel="noreferrer">
                        {t('extra_text')}
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  ) : null
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
