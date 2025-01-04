import { StrictMode } from 'react'
import { ToastContainer } from 'react-toastify'

import './App.scss'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Main } from './components/Main'
import styles from './Toast.module.scss'

export const App = () => {
  return (
    <StrictMode>
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
    </StrictMode>
  )
}
