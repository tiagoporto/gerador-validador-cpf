import { generate, validate } from '.'
import * as utils from './utils'

describe('generate', () => {
  it('should generate a valid CPF', () => {
    const cpf = generate()

    expect(validate(cpf)).toBeTruthy()
    expect(Number.isNaN(Number(cpf))).toBeFalsy()
  })

  it('should generate a non formated CPF 12345678900', () => {
    const cpf = generate({ format: false })

    expect(/^\d{11}$/.test(cpf)).toBeTruthy()
    expect(Number.isNaN(Number(cpf))).toBeFalsy()
  })

  it('should generate a formated CPF 000.000.000-00', () => {
    const cpf = generate({ format: true })

    expect(/^\d{3}.\d{3}.\d{3}-\d{2}$/.test(cpf)).toBeTruthy()
    expect(Number.isNaN(Number(cpf))).toBeTruthy()
  })

  it('should regenerate a new cpf if generate a cpf with all number equals', () => {
    const mock = jest.spyOn(utils, 'generateFirstDigits')
    mock.mockReturnValueOnce('000000000')

    expect(validate(generate())).toBeTruthy()
  })
})
