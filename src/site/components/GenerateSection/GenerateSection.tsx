import styles from './GenerateSection.module.styl'
import { useState, useEffect } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { generate as generateCPF } from '../../../lib/CPF'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'
import i18nResources from '@i18n/app.json'
// @ts-expect-error: Missing types
import { IMaskInput } from 'react-imask'

export const GenerateSection = () => {
  const [cpf, setCpf] = useState<string>('')
  const { t } = useTranslation()

  const handleCopy = (): void => {
    toast(t(i18nResources.messages.cpfCopied))
  }

  const generateNewCPF = (type: string) => (): void => {
    setCpf(generateCPF())

    if (process.env.NODE_ENV === 'production') {
      ;(async () => {
        const ReactGA = await import('react-ga')
        ReactGA.ga('send', 'event', 'Generate', type, 'Generate CPF')
      })()
    }
  }
  useEffect(() => {
    generateNewCPF('load')()
  }, [])

  return (
    <section className={styles.generateSection}>
      <div className={styles.center}>
        <h2>{t(i18nResources.generate.title)}</h2>

        <CopyToClipboard text={cpf} onCopy={handleCopy}>
          <IMaskInput
            aria-label={t(i18nResources.generate.cpfGenerated)}
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
          {t(i18nResources.generate.title)}
        </button>
      </div>
    </section>
  )
}
