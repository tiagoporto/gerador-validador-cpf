import ReactDOM from 'react-dom'
import { App } from './App'
import i18n from 'i18next'
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

process.env.NODE_ENV === 'production' && loadOnProd()

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: i18nResources.en },
    br: { translation: i18nResources.br },
  },
  lng: 'br',
  fallbackLng: 'br',
})

ReactDOM.render(<App />, document.querySelector('#root'))

if (module.hot) {
  module.hot.accept()
}
