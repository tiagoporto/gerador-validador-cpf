import './ValidateSection.styl'
import React, { FC, useState, useEffect, ChangeEvent } from 'react'
import { validate as validadeCPF } from '../../../lib/CPF'
import InputMask from 'react-input-mask'

export const ValidateSection: FC = () => {
  const [validation, setValidation] = useState({
    cpf: '',
    isValid: false,
    message: '',
  })
  const handleChangeCPF = (event: ChangeEvent<HTMLInputElement>): void => {
    setValidation({
      ...validation,
      cpf: event.currentTarget.value,
    })
    // messageInput[0].setAttribute('value', message)
    // typeof window.ga === 'function' &&
    //   window.ga('send', 'event', 'button', 'click', 'Validate CPF')
  }

  useEffect(() => {
    if (validation.cpf) {
      const isValid = validadeCPF(validation.cpf)
      setValidation({
        ...validation,
        message: isValid ? 'CPF Válido' : 'CPF Inválido',
        isValid,
      })
    }
  }, [validation.cpf])

  return (
    <section className="validate-section">
      <h2>Validar</h2>

      <form className="validate-section__form">
        <label
          className="validate-section__label"
          htmlFor="validate-section__input--to-format"
        >
          Insira o CPF para validação
        </label>

        <InputMask
          value={validation.cpf}
          onChange={handleChangeCPF}
          type="text"
          mask={'999.999.999-99'}
          required
        />

        <input
          className={`validate-section__input--message ${
            validation.isValid
              ? 'validate-section__input--valid'
              : 'validate-section__input--invalid'
          }`}
          aria-label="CPF para validação"
          type="text"
          placeholder="Insira CPF para validação"
          value={validation.message}
          readOnly
        />
      </form>
    </section>
  )
}
