import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import backend from 'i18next-http-backend'
import { createRoot } from 'react-dom/client'
import { initReactI18next } from 'react-i18next'

import { App } from './App'
import pkg from '../../package.json'

const loadOnProd = async () => {
  const ReactGA = await import(/* webpackChunkName: "react-ga" */ 'react-ga')

  ReactGA.initialize('UA-32351360-4')
  ReactGA.pageview(globalThis.location.pathname + globalThis.location.search)
  const { registerServiceWorker } = await import(
    /* webpackChunkName: "serviceWorker" */ './service-worker'
  )
  registerServiceWorker()
}

if (process.env.NODE_ENV === 'production') {
  loadOnProd()
}

// eslint-disable-next-line import-x/no-named-as-default-member
i18next
  .use(LanguageDetector)
  .use(backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'pt',
    backend: {
      loadPath: process.env.CI
        ? `${pkg.homepage}/locales/{{lng}}/{{ns}}.json`
        : '/locales/{{lng}}/{{ns}}.json',
    },
  })

const rootElement = document.querySelector('#root')
if (rootElement) {
  const root = createRoot(rootElement)
  root.render(<App />)
} else {
  console.error('Failed to find the root element')
}

/* eslint-disable unicorn/prefer-module */
if (module.hot) {
  module.hot.accept()
}
/* eslint-enable unicorn/prefer-module */
