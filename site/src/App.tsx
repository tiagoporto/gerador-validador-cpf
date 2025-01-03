import 'normalize.css'
import './App.scss'
import { StrictMode } from 'react'
import styles from './Toast.module.scss'
import { ToastContainer } from 'react-toastify'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'

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
