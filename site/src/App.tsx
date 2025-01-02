import 'normalize.css'
import './App.styl'
import { StrictMode } from 'react'
import styles from './Toast.module.styl'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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
        className={styles.toast}
        toastClassName={styles.toastContent}
        position="bottom-center"
        autoClose={2500}
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
