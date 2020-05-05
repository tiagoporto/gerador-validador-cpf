import * as CPF from './CPF'

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
})
