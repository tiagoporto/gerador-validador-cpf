import * as CPF from './CPF'
import * as utils from './utils'

describe('Generate function', () => {
  it('generate a valid CPF', () => {
    expect(CPF.validate(CPF.generate())).toBeTruthy()
  })

  it('generate a formated CPF', () => {
    const cpf = CPF.generate({ format: true })

    expect(/^\d{3}.\d{3}.\d{3}-\d{2}$/.test(cpf)).toBeTruthy()
  })

  it('generate a non formated CPF', () => {
    const cpf = CPF.generate({ format: false })

    expect(/^\d{11}$/.test(cpf)).toBeTruthy()
  })

  it('check if is not generatin a cpf with all number equal', () => {
    const mock = jest.spyOn(utils, 'generateFirstDigits')
    mock.mockReturnValueOnce('000000000')

    expect(CPF.validate(CPF.generate())).toBeTruthy()
  })
})
