import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import styles from './ChangeLocale.module.scss'

type AvailableLocales = 'en' | 'br' | 'es'

export const ChangeLocale = () => {
  const [locale, setLocale] = useState('')
  const { i18n } = useTranslation()

  const handleLocale = (locale: AvailableLocales) => () => {
    void i18n.changeLanguage(locale)
  }

  useEffect(() => {
    setLocale(i18n.language)
  }, [i18n.language])

  return (
    <div className={styles.box}>
      <button
        className={`${styles.button} ${locale === 'br' ? styles.selected : ''}`}
        onClick={handleLocale('br')}
      >
        pt-br
      </button>
      |
      <button
        className={`${styles.button} ${locale === 'en' ? styles.selected : ''}`}
        onClick={handleLocale('en')}
      >
        en
      </button>
      |
      <button
        className={`${styles.button} ${locale === 'es' ? styles.selected : ''}`}
        onClick={handleLocale('es')}
      >
        es
      </button>
    </div>
  )
}
