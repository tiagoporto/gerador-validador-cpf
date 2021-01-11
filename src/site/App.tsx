import './styles'
import { StrictMode } from 'react'
import styles from './Toast.module.styl'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Main } from './components/Main'

export const App = () => {
  return (
    <>
      <StrictMode>
        <Header />
        <Main />
        <Footer />
      </StrictMode>

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
    </>
  )
}
