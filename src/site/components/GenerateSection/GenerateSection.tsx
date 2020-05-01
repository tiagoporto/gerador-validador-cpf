import styles from './GenerateSection.module.styl'
import React, { FC, useState, useEffect } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { generate as generateCPF } from '../../../lib/CPF'

export const GenerateSection: FC = () => {
  const [cpf, setCpf] = useState<string>('')

  const generateNewCPF = (): void => {
    setCpf(generateCPF())
    // declare global {
    //   interface Window {
    //     ga: (a: string, b: string, c: string, d: string, e: string) => void
    //   }
    // }
    // typeof window.ga === 'function' &&
    //   window.ga('send', 'event', 'button', 'click', 'Generate CPF')
  }
  useEffect(() => {
    generateNewCPF()
  }, [])

  return (
    <section>
      <h2>Gerar</h2>

      <button
        onClick={generateNewCPF}
        className={styles.submitButton}
        type="button"
      >
        Gerar CPF
      </button>

      <input
        value={cpf}
        aria-label="CPF gerado"
        className={styles.input}
        type="text"
        placeholder="CPF gerado"
        readOnly
      />

      <CopyToClipboard text={cpf}>
        <button className={styles.copyButton} type="button">
          copiar
        </button>
      </CopyToClipboard>
    </section>
  )
}
