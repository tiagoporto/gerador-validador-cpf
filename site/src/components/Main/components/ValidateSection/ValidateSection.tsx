import style from './ValidateSection.module.styl'
import { useState, useEffect } from 'react'
import { validate as validadeCPF } from 'gerador-validador-cpf'
import { IMaskInput } from 'react-imask'
import { useTranslation } from 'react-i18next'

const enableAnalytics = async () => {
  const ReactGA = await import('react-ga')
  ReactGA.ga('send', 'event', 'Validate', 'type', 'Validate CPF')
}

export const ValidateSection = () => {
  const { t } = useTranslation()
  const [validation, setValidation] = useState({
    tempCpf: '',
    cpf: '',
    isValid: false,
    message: '',
  })
  const { cpf, isValid, message, tempCpf } = validation

  type Validation = typeof validation

  const updateValidationState = (parameters: Partial<Validation>) => {
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
      process.env.NODE_ENV === 'production' && enableAnalytics()

      const isValid = validadeCPF(tempCpf)
      const message = isValid
        ? t('messages.validCPF')
        : t('messages.invalidCPF')

      updateValidationState({
        cpf: tempCpf,
        isValid,
        message,
      })
    } else {
      const message = tempCpf ? t('messages.incomplete') : ''

      updateValidationState({
        cpf: '',
        message,
      })
    }
  }, [tempCpf])

  return (
    <section className={style.validateSection}>
      <div className={style.center}>
        <h2>{t('validate.title')}</h2>

        <IMaskInput
          aria-label={t('validate.insertCPF')}
          value={tempCpf}
          placeholder={t('validate.insertCPF')}
          onAccept={handleChangeCPF}
          className={style.validateSectionInput}
          type="text"
          mask={'000.000.000-00'}
          required
        />

        <div
          className={`${style.validateSectionInput} ${style.message} ${
            isValid && cpf ? style.messageValid : ''
          } ${!isValid && cpf ? style.messageInvalid : ''}`}
        >
          {message || '...'}
        </div>
      </div>
    </section>
  )
}
