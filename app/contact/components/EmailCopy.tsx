'use client'

import { showToast } from '@/app/components/Toast/Toast'
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslations } from 'next-intl'
import React, { useRef, useState } from 'react'

type Props = {
  toastRef: React.RefObject<HTMLDivElement | null>
}

export const EmailCopy = ({ toastRef }: Props) => {
  const emailRef = useRef<HTMLSpanElement>(null)
  const [copied, setCopied] = useState(false)
  const emailAddress = 'jan@rezzonico.dev'

  const selectText = () => {
    if (emailRef.current) {
      const range = document.createRange()
      range.selectNodeContents(emailRef.current)
      window.getSelection()?.removeAllRanges()
      window.getSelection()?.addRange(range)
    }
  }

  const clear = () => {
    window.getSelection()?.removeAllRanges()
    setTimeout(() => {
      setCopied(false)
    }, 200) //Avoid graphical glitch of text changing before tooltip disappears
  }

  const copy = () => {
    navigator.clipboard.writeText(emailAddress)
    setCopied(true)
    showToast(toastRef, {
      mode: 'info',
      title: t('copied'),
      text: t('thanks'),
      emoji: '👋',
      duration: 5000,
    })
  }

  const onHover = () => {
    selectText()
  }

  const onHoverExit = () => {
    clear()
  }
  const t = useTranslations('ContactPage')
  return (
    <div
      className="tooltip tooltip-primary mt-8"
      data-aos="fade-up">
      <div className="tooltip-content text-primary-content">
        <div className="flex justify-center items-center p-2">
          <FontAwesomeIcon
            icon={copied ? faCheck : faCopy}
            className="w-4 mr-2"
          />
          {copied ? t('copied') : t('copy')}
        </div>
      </div>
      <span
        ref={emailRef}
        className="text-3xl underline select-text text-primary"
        onMouseEnter={onHover}
        onMouseLeave={onHoverExit}
        onClick={copy}>
        {emailAddress}
      </span>
    </div>
  )
}
