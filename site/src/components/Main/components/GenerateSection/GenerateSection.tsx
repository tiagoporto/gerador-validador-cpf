import { useEffect, useState } from 'react'
import { generate as generateCPF } from 'gerador-validador-cpf'
import CopyToClipboard from 'react-copy-to-clipboard'
import { useTranslation } from 'react-i18next'
import { IMaskInput } from 'react-imask'
import { toast } from 'react-toastify'

import styles from './GenerateSection.module.scss'

export const GenerateSection = () => {
  const [cpf, setCpf] = useState<string>('')
  const { t } = useTranslation()

  const handleCopy = () => {
    toast(t('messages.cpfCopied'))
  }

  const generateNewCPF = (type: string) => () => {
    setCpf(generateCPF())

    if (process.env.NODE_ENV === 'production') {
      const pushData = async () => {
        const ReactGA = await import('react-ga')
        ReactGA.ga('send', 'event', 'Generate', type, 'Generate CPF')
      }

      pushData()
    }
  }
  useEffect(() => {
    generateNewCPF('load')()
  }, [])

  return (
    <div className={styles.generateSection}>
      <div>
        <h2>{t('generate.title')}</h2>

        <CopyToClipboard text={cpf} onCopy={handleCopy}>
          <IMaskInput
            aria-label={t('generate.cpfGenerated')}
            value={cpf}
            className={styles.input}
            type="text"
            mask={'000.000.000-00'}
            readOnly
          />
        </CopyToClipboard>

        <button
          onClick={generateNewCPF('click')}
          className={styles.generateButton}
          type="button"
        >
          {t('generate.title')}
        </button>
      </div>
    </div>
  )
}
