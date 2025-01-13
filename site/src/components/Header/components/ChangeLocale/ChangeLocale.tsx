import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

import styles from './ChangeLocale.module.scss'

type AvailableLocales = 'en' | 'pt' | 'es'

export const ChangeLocale = () => {
  const [locale, setLocale] = useState<AvailableLocales>('pt')
  const { i18n } = useTranslation()

  const handleLocale = (locale: AvailableLocales) => () => {
    i18n.changeLanguage(locale)
  }

  useEffect(() => {
    setLocale(i18n.language.split('-')[0] as AvailableLocales)
  }, [i18n.language])

  return (
    <>
      <Helmet htmlAttributes={{ lang: locale }} />

      <div className={styles.box}>
        <button
          data-testid="en-locale-button"
          className={`${styles.button} ${locale === 'en' ? styles.selected : ''}`}
          onClick={handleLocale('en')}
        >
          en
        </button>
        |
        <button
          data-testid="es-locale-button"
          className={`${styles.button} ${locale === 'es' ? styles.selected : ''}`}
          onClick={handleLocale('es')}
        >
          es
        </button>
        |
        <button
          data-testid="pt-locale-button"
          className={`${styles.button} ${locale === 'pt' ? styles.selected : ''}`}
          onClick={handleLocale('pt')}
        >
          pt
        </button>
      </div>
    </>
  )
}
