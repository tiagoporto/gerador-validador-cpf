import './styles'
import React, { StrictMode, FC } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Main } from './components/Main'

export const App: FC = () => (
  <StrictMode>
    <Header />
    <Main />
    <Footer />
  </StrictMode>
)
