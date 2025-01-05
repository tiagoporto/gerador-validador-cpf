import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import backend from 'i18next-http-backend'
import { createRoot } from 'react-dom/client'
import { initReactI18next } from 'react-i18next'

import { App } from './App'

const loadOnProd = async () => {
  const ReactGA = await import(/* webpackChunkName: "react-ga" */ 'react-ga')

  ReactGA.initialize('UA-32351360-4')
  ReactGA.pageview(window.location.pathname + window.location.search)
  const { registerServiceWorker } = await import(
    /* webpackChunkName: "serviceWorker" */ './serviceWorker'
  )
  registerServiceWorker()
}

if (process.env.NODE_ENV === 'production') {
  void loadOnProd()
}
// eslint-disable-next-line import/no-named-as-default-member
void i18next.use(LanguageDetector).use(backend).use(initReactI18next).init({
  fallbackLng: 'br',
})

const rootElement = document.querySelector('#root')
if (rootElement) {
  const root = createRoot(rootElement)
  root.render(<App />)
} else {
  console.error('Failed to find the root element')
}
