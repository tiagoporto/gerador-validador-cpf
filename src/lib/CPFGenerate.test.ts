import * as CPF from './CPF'
import * as utils from './utils'

describe('CPF.generate()', () => {
  it('Should generate a valid CPF', () => {
    const cpf = CPF.generate()

    expect(CPF.validate(cpf)).toBeTruthy()
    expect(isNaN(Number(cpf))).toBeFalsy()
  })

  it('Should generate a non formated CPF 12345678900', () => {
    const cpf = CPF.generate({ format: false })

    expect(/^\d{11}$/.test(cpf)).toBeTruthy()
    expect(isNaN(Number(cpf))).toBeFalsy()
  })

  it('Should generate a formated CPF 000.000.000-00', () => {
    const cpf = CPF.generate({ format: true })

    expect(/^\d{3}.\d{3}.\d{3}-\d{2}$/.test(cpf)).toBeTruthy()
    expect(isNaN(Number(cpf))).toBeTruthy()
  })

  it('Should regenerate a new cpf if generate a cpf with all number equals', () => {
    const mock = jest.spyOn(utils, 'generateFirstDigits')
    mock.mockReturnValueOnce('000000000')

    expect(CPF.validate(CPF.generate())).toBeTruthy()
  })
})
