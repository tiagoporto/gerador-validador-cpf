import styles from './GenerateSection.module.styl'
import React, { FC, useState, useEffect } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { generate as generateCPF } from '../../../lib/CPF'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'
import i18nResources from '@i18nResources'

export const GenerateSection: FC = () => {
  const [cpf, setCpf] = useState<string>('')
  const { t } = useTranslation()

  const handleCopy = (): void => {
    toast(t(i18nResources.messages.cpfCopied))
  }

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
      <h2>{t(i18nResources.generate.title)}</h2>

      <CopyToClipboard text={cpf} onCopy={handleCopy}>
        <input
          value={cpf}
          className={styles.input}
          type="text"
          placeholder={i18nResources.generate.cpfGenerated}
          readOnly
        />
      </CopyToClipboard>

      <button
        onClick={generateNewCPF('click')}
        className={styles.generateButton}
        type="button"
      >
        {t(i18nResources.generate.title)}
      </button>
    </section>
  )
}
