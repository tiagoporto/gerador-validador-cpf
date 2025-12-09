import { useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

import * as styles from './ChangeLocale.module.scss'

type AvailableLocales = 'en' | 'pt' | 'es'

export const ChangeLocale = () => {
  const { i18n } = useTranslation()
  const currentLocale = useMemo(() => i18n.language.split('-')[0] as AvailableLocales, [i18n.language])

  const handleLocale = (locale: AvailableLocales) => () => {
    i18n.changeLanguage(locale).catch(console.error)
  }

  return (
    <>
      <Helmet htmlAttributes={{ lang: currentLocale }} />

      <div className={styles.box}>
        <button
          type="button"
          data-testid="en-locale-button"
          className={`${styles.button} ${currentLocale === 'en' ? styles.selected : ''}`}
          onClick={handleLocale('en')}
        >
          en
        </button>
        |
        <button
          type="button"
          data-testid="es-locale-button"
          className={`${styles.button} ${currentLocale === 'es' ? styles.selected : ''}`}
          onClick={handleLocale('es')}
        >
          es
        </button>
        |
        <button
          type="button"
          data-testid="pt-locale-button"
          className={`${styles.button} ${currentLocale === 'pt' ? styles.selected : ''}`}
          onClick={handleLocale('pt')}
        >
          pt
        </button>
      </div>
    </>
  )
}
