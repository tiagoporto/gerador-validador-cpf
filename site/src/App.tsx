import { StrictMode } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { ToastContainer } from 'react-toastify'

import './App.scss'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Main } from './components/Main'
import * as styles from './Toast.module.scss'

export const App = () => {
  const { t } = useTranslation()

  return (
    <StrictMode>
      <HelmetProvider>
        <Helmet>
          <title>{t('app.title')}</title>
          <meta name="description" content={t('app.description')} />
          <meta name="application-name" content={t('app.name')} />
          <meta property="og:title" content={t('app.title')} />
          <meta property="og:description" content={t('app.description')} />
        </Helmet>

        <Header />
        <Main />
        <Footer />

        <ToastContainer
          toastClassName={styles.toast}
          position="bottom-center"
          autoClose={2500}
          closeButton={false}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
        />
      </HelmetProvider>
    </StrictMode>
  )
}
