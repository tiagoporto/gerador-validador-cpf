import { useEffect, useState } from 'react'
import { validate as validadeCPF } from 'gerador-validador-cpf'
import { useTranslation } from 'react-i18next'
import { IMaskInput } from 'react-imask'

import style from './ValidateSection.module.scss'

const enableAnalytics = async () => {
  const ReactGA = await import('react-ga')
  ReactGA.ga('send', 'event', 'Validate', 'type', 'Validate CPF')
}

interface State {
  tempCpf: string
  cpf: string
  isValid: boolean
  message: string
}

export const ValidateSection = () => {
  const { t } = useTranslation()
  const [validation, setValidation] = useState<State>({
    tempCpf: '',
    cpf: '',
    isValid: false,
    message: '',
  })
  const { cpf, isValid, message, tempCpf } = validation

  const updateValidationState = (parameters: Partial<State>) => {
    setValidation((previousState) => ({
      ...previousState,
      ...parameters,
    }))
  }

  const handleChangeCPF = (cpf: string): void => {
    updateValidationState({ tempCpf: cpf })
  }

  useEffect(() => {
    if (tempCpf.length === 14) {
      if (process.env.NODE_ENV === 'production') {
        void enableAnalytics()
      }

      const isValid = validadeCPF(tempCpf)
      const message = isValid ? 'messages.validCPF' : 'messages.invalidCPF'

      updateValidationState({
        cpf: tempCpf,
        isValid,
        message,
      })
    } else {
      const message = tempCpf ? 'messages.incomplete' : ''

      updateValidationState({
        cpf: '',
        message,
      })
    }
  }, [tempCpf])

  return (
    <div className={style.validateSection}>
      <h2>{t('validate.title')}</h2>

      <IMaskInput
        aria-label={t('validate.insertCPF')}
        value={tempCpf}
        data-testid="input-validate-cpf"
        placeholder={t('validate.insertCPF')}
        onAccept={handleChangeCPF}
        className={style.validateSectionInput}
        type="text"
        mask={'000.000.000-00'}
        required
      />

      <div
        data-testid="validate-message"
        className={`${style.validateSectionInput} ${style.message} ${
          isValid && cpf ? style.messageValid : ''
        } ${!isValid && cpf ? style.messageInvalid : ''}`}
      >
        {/* @ts-expect-error: i18n key */}
        {t(message) || '...'}
      </div>
    </div>
  )
}
