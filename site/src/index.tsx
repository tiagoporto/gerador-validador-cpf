import { createRoot } from 'react-dom/client'
import { App } from './App'
import { use } from 'i18next'
import { initReactI18next } from 'react-i18next'
import { i18nResources } from './locales'

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

use(initReactI18next).init({
  resources: {
    en: { translation: i18nResources.en },
    br: { translation: i18nResources.br },
  },
  lng: 'br',
  fallbackLng: 'br',
})

const rootElement = document.querySelector('#root')
if (rootElement) {
  const root = createRoot(rootElement)
  root.render(<App />)
} else {
  console.error('Failed to find the root element')
}
