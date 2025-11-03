import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import backend from 'i18next-http-backend'
import { createRoot } from 'react-dom/client'
import { initReactI18next } from 'react-i18next'

import { App } from './App'
import pkg from '../../package.json' with { type: 'json' }

const loadOnProd = async () => {
  const { registerServiceWorker } = await import(
    /* webpackChunkName: "serviceWorker" */ './service-worker',
  )
  registerServiceWorker()
}

if (process.env.NODE_ENV === 'production') {
  loadOnProd().catch(console.error)
}

i18next
  .use(LanguageDetector)
  .use(backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'pt',
    backend: {
      loadPath: `${process.env.CI === 'true' ? `${pkg.homepage}` : '/'}locales/{{lng}}/{{ns}}.json`,
    },
  }).catch(console.error)

const rootElement = document.querySelector('#root')
if (rootElement) {
  const root = createRoot(rootElement)
  root.render(<App />)
} else {
  console.error('Failed to find the root element')
}

const hotModule = module.hot

if (hotModule) {
  hotModule.accept()
}
