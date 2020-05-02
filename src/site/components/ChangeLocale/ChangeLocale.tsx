import React, { FC, useState, useEffect } from 'react'
import i18next from 'i18next'
import styles from './ChangeLocale.module.styl'

type AvailableLocales = 'en' | 'br'

export const ChangeLocale: FC = () => {
  const handleLocale = (locale: AvailableLocales) => (): void => {
    i18next.changeLanguage(locale)
  }
  const [locale, setLocale] = useState('')

  useEffect(() => {
    setLocale(i18next.language)
  }, [i18next.language])

  return (
    <div className={styles.box}>
      <button
        className={`${styles.button} ${locale === 'br' ? styles.selected : ''}`}
        onClick={handleLocale('br')}
      >
        pt-br
      </button>{' '}
      |{' '}
      <button
        className={`${styles.button} ${locale === 'en' ? styles.selected : ''}`}
        onClick={handleLocale('en')}
      >
        en
      </button>
    </div>
  )
}
