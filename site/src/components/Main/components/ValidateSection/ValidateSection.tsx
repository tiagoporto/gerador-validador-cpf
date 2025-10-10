import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { IMaskInput } from 'react-imask'

import { validate as validadeCPF } from 'gerador-validador-cpf'

import style from './ValidateSection.module.scss'

type Message = 'messages.validCPF' | 'messages.invalidCPF' | 'messages.incomplete'
const enableAnalytics = () => {
  if (globalThis.gtag) {
    globalThis.gtag('event', 'cpf', {
      event_label: 'Validate',
    })
  }
}

export const ValidateSection = () => {
  const { t } = useTranslation()
  const [temporaryCpf, setTemporaryCpf] = useState<string>('')
  const [message, setMessage] = useState<Message>()

  const handleChangeCPF = (cpf: string): void => {
    setTemporaryCpf(cpf)
  }

  const isValid = useMemo(() => validadeCPF(temporaryCpf), [temporaryCpf])

  useMemo(() => {
    let newMessage: Message | undefined
    if (process.env.NODE_ENV === 'production') {
      void enableAnalytics()
    }

    if (temporaryCpf.length === 14) {
      newMessage = isValid ? 'messages.validCPF' : 'messages.invalidCPF'
    } else if (temporaryCpf.length > 0) {
      newMessage = 'messages.incomplete'
    }

    setMessage(newMessage)
  }, [isValid, temporaryCpf])

  return (
    <div className={style.validateSection}>
      <h2>{t('validate.title')}</h2>

      <IMaskInput
        aria-label={t('validate.insertCPF')}
        value={temporaryCpf}
        data-testid="input-validate-cpf"
        placeholder={t('validate.insertCPF')}
        onAccept={handleChangeCPF}
        className={style.validateSectionInput}
        type="text"
        mask="000.000.000-00"
        required
      />

      <div
        data-testid="validate-message"
        className={`${style.validateSectionInput} ${style.message} ${
          message === 'messages.validCPF' ? style.messageValid : ''} ${
          message === 'messages.invalidCPF' ? style.messageInvalid : ''}`}
      >
        {(message && t(message)) ?? '...'}
      </div>
    </div>
  )
}
