import { useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useTranslation } from 'react-i18next'
import { IMaskInput } from 'react-imask'
import { toast } from 'react-toastify'

import { generate as generateCPF } from 'gerador-validador-cpf'

import styles from './GenerateSection.module.scss'

export const GenerateSection = () => {
  const [cpf, setCpf] = useState<string>('')
  const { t } = useTranslation()

  const handleCopy = () => {
    toast(t('messages.cpfCopied'))
  }

  const generateNewCPF = () => {
    setCpf(generateCPF())

    if (process.env.NODE_ENV === 'production' && globalThis.gtag) {
      globalThis.gtag('event', 'cpf', {
        event_label: 'Generate',
      })
    }
  }

  useEffect(() => {
    generateNewCPF()
  }, [])

  return (
    <div className={styles.generateSection}>
      <div>
        <h2>{t('generate.title')}</h2>

        <CopyToClipboard text={cpf} onCopy={handleCopy}>
          <IMaskInput
            aria-label={t('generate.cpfGenerated')}
            value={cpf}
            data-testid="input-generate-cpf"
            data-chromatic="ignore"
            className={styles.input}
            type="text"
            mask={'000.000.000-00'}
            readOnly
          />
        </CopyToClipboard>

        <button
          data-testid="generate-cpf-button"
          onClick={generateNewCPF}
          className={styles.generateButton}
          type="button"
        >
          {t('generate.title')}
        </button>
      </div>
    </div>
  )
}
