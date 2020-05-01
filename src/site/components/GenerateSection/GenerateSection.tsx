import styles from './GenerateSection.module.styl'
import React, { FC, useState, useEffect } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { generate as generateCPF } from '../../../lib/CPF'

export const GenerateSection: FC = () => {
  const [cpf, setCpf] = useState<string>('')

  const generateNewCPF = (type: string) => (): void => {
    setCpf(generateCPF())

    if (process.env.NODE_ENV === 'production') {
      import('react-ga').then((ReactGA) => {
        ReactGA.ga('send', 'event', 'Generate', type, 'Generate CPF')
      })
    }
  }
  useEffect(() => {
    generateNewCPF('load')()
  }, [])

  return (
    <section className={styles.generateSection}>
      <h2>Gerar</h2>

      <CopyToClipboard text={cpf} options={{ message: 'cpied' }}>
        <input
          value={cpf}
          aria-label="CPF gerado"
          className={styles.input}
          type="text"
          placeholder="CPF gerado"
          readOnly
        />
      </CopyToClipboard>

      <button
        onClick={generateNewCPF('click')}
        className={styles.generateButton}
        type="button"
      >
        Gerar
      </button>
    </section>
  )
}
