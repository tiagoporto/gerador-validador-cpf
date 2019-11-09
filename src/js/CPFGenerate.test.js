import { generate, validate } from './CPF'

const CPF = { generate, validate }

describe('Generate function', () => {
  it('generate a valid CPF', () => {
    expect(CPF.validate(CPF.generate())).toBeTruthy()
  })
})
