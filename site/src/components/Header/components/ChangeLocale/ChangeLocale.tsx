import { useState, useEffect } from 'react'
import i18next, { changeLanguage } from 'i18next'
import styles from './ChangeLocale.module.scss'

type AvailableLocales = 'en' | 'br'

const handleLocale =
  (locale: AvailableLocales, callback?: () => void) => (): void => {
    changeLanguage(locale)
    window.history.replaceState(
      {},
      'Gerador e Validador de CPF',
      `?lang=${locale}`,
    )
    if (callback) {
      setTimeout(callback, 5)
    }
  }

export const ChangeLocale = () => {
  const [locale, setLocale] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setLocale(i18next.language)
  }, [i18next.language])

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)
    const lang = searchParams.get('lang')
    if (lang) {
      handleLocale(lang as AvailableLocales, () => setIsLoading(false))()
    } else {
      setIsLoading(false)
    }
  }, [])

  // eslint-disable-next-line unicorn/no-null
  return isLoading ? null : (
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
