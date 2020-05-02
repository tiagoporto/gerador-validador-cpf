import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { i18nResources } from '../../locales'

if (process.env.NODE_ENV === 'production') {
  import('react-ga').then((ReactGA) => {
    ReactGA.initialize('UA-32351360-4')
    ReactGA.pageview(window.location.pathname + window.location.search)
  })
  // @ts-expect-error
  import('./serviceWorker')
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: i18nResources.en },
    br: { translation: i18nResources.br },
  },
  lng: 'en',
  fallbackLng: 'br',
})

ReactDOM.render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept()
}
