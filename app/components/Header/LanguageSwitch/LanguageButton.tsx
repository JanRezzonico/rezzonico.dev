import React from 'react'
import styles from './LanguageButton.module.css'

type Props = {
  code: string
  onChange: (code: string) => void
  locale: string
}

export const LanguageButton = ({ code, onChange, locale }: Props) => {
  return (
    <button
      className={`basis-full text-sm rounded-full ${
        locale === code ? styles.buttonSelected : ''
      }`}
      onClick={() => onChange(code)}>
      <span
        className={`uppercase ${locale === code ? styles.textSelected : ''}`}>
        {code}
      </span>
    </button>
  )
}
