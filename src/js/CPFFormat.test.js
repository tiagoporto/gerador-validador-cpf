import { format, formatOptions } from './CPF'

const CPF = { format, formatOptions }
const spy = jest.spyOn(console, 'error')
const ERROR_MESSAGE = {
  fewer: 'The value contains error. Has fewer than 11 digits.',
  more: 'The value contains error. Has more than 11 digits.'
}

beforeEach(() => {
  spy.mockReset()
})

describe('Format function', () => {
  describe('Type Number', () => {
    describe('Default Param', () => {
      it('return valid formatted CPF 137.686.636-63', () => {
        expect(CPF.format(13768663663) === '137.686.636-63').toBeTruthy()
      })
    })

    describe('Checker Param', () => undefined)

    describe('Digits Param', () => undefined)
  })

  describe('Type String', () => {
    describe('Default Param', () => {
      it('Should return a valid CPF formatted XXX.XXX.XXX-XX passing numbers', () => {
        expect(CPF.format('13768663663') === '137.686.636-63').toBeTruthy()
      })

      it('Should return a valid CPF formatted XXX.XXX.XXX-XX passing formatted CPF', () => {
        expect(CPF.format('137.686.636-63') === '137.686.636-63').toBeTruthy()
      })

      it('Passando dígitos', () => {
        CPF.format('137686.636639')
        expect(CPF.format('137686.636639') === undefined).toBeTruthy()
        expect(spy).toHaveBeenCalledWith(ERROR_MESSAGE.more)
      })

      it('Faltando dígitos', () => {
        expect(CPF.format('136.6636-63') === '137.686.636-63').toBeFalsy()
        expect(spy).toHaveBeenCalledWith(ERROR_MESSAGE.fewer)
      })

      it('Com outros caracteres', () => {
        expect(CPF.format('13a6.6636-63') === '137.686.636-63').toBeFalsy()
        expect(spy).toHaveBeenCalledWith(ERROR_MESSAGE.fewer)
      })
    })

    describe('Checker Param', () => {
      it('Should return a valid CPF formatted XXXXXXXXX-XX', () => {
        expect(
          CPF.format('13768663663', CPF.formatOptions.checker) ===
            '137686636-63'
        ).toBeTruthy()
      })
    })

    describe('Digits Param', () => {
      it('Should return a valid CPF formatted XXXXXXXXXXX', () => {
        expect(
          CPF.format('137.686.636-63', CPF.formatOptions.digits) ===
            '13768663663'
        ).toBeTruthy()
      })
    })
  })
})
