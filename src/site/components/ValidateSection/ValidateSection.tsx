import style from './ValidateSection.module.styl'
import React, { FC, useState, useEffect, ChangeEvent } from 'react'
import { validate as validadeCPF } from '../../../lib/CPF'
// @ts-expect-error
import { IMaskInput } from 'react-imask'
import { useTranslation } from 'react-i18next'
import i18nResources from '@i18nResources'

export const ValidateSection: FC = () => {
  const { t } = useTranslation()

  const [validation, setValidation] = useState({
    tempCpf: '',
    cpf: '',
    isValid: false,
    message: '',
  })

  const { cpf, isValid, message, tempCpf } = validation

  const handleChangeCPF = (cpf: string): void => {
    setValidation({
      ...validation,
      tempCpf: cpf,
    })
  }

  useEffect(() => {
    if (tempCpf.length === 14) {
      if (process.env.NODE_ENV === 'production') {
        import('react-ga').then((ReactGA) => {
          ReactGA.ga('send', 'event', 'Validate', 'type', 'Validate CPF')
        })
      }

      const isValid = validadeCPF(tempCpf)
      setValidation({
        ...validation,
        cpf: tempCpf,
        isValid,
        message: isValid
          ? t(i18nResources.messages.validCPF)
          : t(i18nResources.messages.invalidCPF),
      })
    } else {
      setValidation({
        ...validation,
        cpf: '',
        message: tempCpf ? t(i18nResources.messages.incomplete) : '',
      })
    }
  }, [tempCpf])

  return (
    <section className={style.validateSection}>
      <div className={style.center}>
        <h2>{t(i18nResources.validate.title)}</h2>

        <IMaskInput
          aria-label={t(i18nResources.validate.insertCPF)}
          value={tempCpf}
          placeholder={t(i18nResources.validate.insertCPF)}
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
