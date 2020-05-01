import './FormatSection.styl'
import React, { FC, useState, ChangeEvent } from 'react'
import InputMask from 'react-input-mask'
import { format as formatCPF, formatOptions } from '../../../lib/CPF'

export const FormatSection: FC = () => {
  const [validation, setValidation] = useState({
    cpf: 'undefined',
    formated: '',
    formatParam: 'default',
  })

  const formatOptionsEnum: { value: formatOptions; label: string }[] = [
    {
      value: 'checker',
      label: 'Separa o Verificador',
    },
    {
      value: 'digits',
      label: 'Somente Digitos',
    },
    {
      value: 'default',
      label: 'Padrão',
    },
  ]

  const handleChangeCPF = (event: ChangeEvent<HTMLInputElement>): void => {
    const currentCPF = event.currentTarget.value
    setValidation({
      ...validation,
      cpf: currentCPF,
      formated: formatCPF(currentCPF) as string,
    })
    // typeof window.ga === 'function' &&
    //   window.ga('send', 'event', 'button', 'click', 'Formate CPF')
  }

  const handleParamChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    const currentParam = event.currentTarget.value as formatOptions
    setValidation({
      ...validation,
      formatParam: currentParam,
      formated: formatCPF(validation.cpf, currentParam) as string,
    })
    // typeof window.ga === 'function' &&
    //   window.ga('send', 'event', 'button', 'click', 'Formate CPF')
  }

  return (
    <section className="format-section">
      <h2>Formatar</h2>

      <form className="format-section__form">
        <label
          className="format-section__label"
          htmlFor="format-section__input"
        >
          Insira o CPF para validação
        </label>

        <InputMask
          id="format-section__input"
          mask={'999.999.999-99'}
          type="text"
          value={validation.cpf}
          onChange={handleChangeCPF}
          required
        />

        <select
          className="format-section__params"
          aria-label="Parametros para formatação do CPF"
          value={validation.formatParam as formatOptions}
          onChange={handleParamChange}
        >
          {formatOptionsEnum.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <input
          className="format-section__input--message"
          type="text"
          placeholder="CPF formatado"
          aria-label="CPF formatado"
          value={validation.formated}
          readOnly
        />
      </form>
    </section>
  )
}
