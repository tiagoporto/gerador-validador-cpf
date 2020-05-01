import style from './ValidateSection.module.styl'
import React, { FC, useState, useEffect, ChangeEvent } from 'react'
import { validate as validadeCPF } from '../../../lib/CPF'
// @ts-expect-error
import { IMaskInput } from 'react-imask'

export const ValidateSection: FC = () => {
  const [validation, setValidation] = useState({
    tempCpf: '',
    cpf: '',
    isValid: false,
    message: '',
  })

  const { cpf, isValid, message, tempCpf } = validation

  const handleChangeCPF = (event: ChangeEvent<HTMLInputElement>): void => {
    setValidation({
      ...validation,
      tempCpf: event.currentTarget.value,
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
        message: isValid ? 'CPF Válido' : 'CPF Inválido',
      })
    } else {
      setValidation({
        ...validation,
        cpf: '',
        message: tempCpf ? 'incompleto' : '',
      })
    }
  }, [tempCpf])

  return (
    <section className={style.validateSection}>
      <h2>Validar</h2>

      <IMaskInput
        value={tempCpf}
        onChange={handleChangeCPF}
        placeholder="Insira o CPF"
        className={style.validateSectionInput}
        type="text"
        mask={'000.000.000-00'}
        required
      />

      <input
        className={`${style.validateSectionInput} ${style.message} ${
          isValid && cpf ? style.messageValid : ''
        } ${!isValid && cpf ? style.messageInvalid : ''}`}
        type="text"
        placeholder="..."
        value={message}
        readOnly
      />
    </section>
  )
}
