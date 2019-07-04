import { validate } from './CPF'

const CPF = { validate }
const spy = jest.spyOn(console, 'warn')
const WARN_MESSAGE = 'Unsupported value'

beforeEach(() => {
  spy.mockReset()
})

describe('Validate function', () => {
  describe('Type Number', () => {
    it('Should return true to a valid CPF', () => {
      expect(CPF.validate(13768663663)).toBeTruthy()
    })

    it("Should return false when isn't a valid CPF", () => {
      expect(CPF.validate(123456789012)).toBeFalsy()
    })

    it('Should return false when is missing digits', () => {
      expect(CPF.validate(13768664)).toBeFalsy()
    })

    it('Should return false when is more than 11 digits', () => {
      expect(CPF.validate(1376864235262564)).toBeFalsy()
    })

    it('Should return false is 11 repeat digits', () => {
      expect(CPF.validate(11111111111)).toBeFalsy()
    })
  })

  describe('Type String', () => {
    it('Should return true to a valid CPF starting with 0', () => {
      expect(CPF.validate('06325112733')).toBeTruthy()
    })

    it('Should return true to a valid CPF just with digits', () => {
      expect(CPF.validate('13768663663')).toBeTruthy()
    })

    it('Should return true to a valid CPF with separator -', () => {
      expect(CPF.validate('137686636-63')).toBeTruthy()
    })

    it('Should return true to a valid CPF with separator - and .', () => {
      expect(CPF.validate('137.686.636-63')).toBeTruthy()
    })

    it("Should return false when isn't a valid CPF just with digits", () => {
      expect(CPF.validate('06487598710')).toBeFalsy()
    })

    it("Should return false when isn't a valid CPF with separator -", () => {
      expect(CPF.validate('064875987-10')).toBeFalsy()
    })

    it("Should return false when isn't a valid CPF with separator - and .", () => {
      expect(CPF.validate('064.875.987-10')).toBeFalsy()
    })

    it('Should return false when is mixing digits and letter', () => {
      expect(CPF.validate('a064.875.987-10')).toBeFalsy()
    })

    it('Should return false to special caracters', () => {
      expect(CPF.validate('0&.*00.00a-00')).toBeFalsy()
    })

    it('Should return false is 11 repeat digits', () => {
      expect(CPF.validate('00000000000')).toBeFalsy()
    })

    it('Verificador 1 = 0', () => {
      expect(CPF.validate('76381842202')).toBeTruthy()
    })

    it('Verificador 1 > 1', () => {
      expect(CPF.validate('125.828.106-65')).toBeTruthy()
    })

    it('Verificador 2 = 0', () => {
      expect(CPF.validate('433.787.588-30')).toBeTruthy()
    })

    it('Verificador 2 > 1', () => {
      expect(CPF.validate('855.178.021-25')).toBeTruthy()
    })
  })

  describe('No values', () => {
    it('Should return undefined to true', () => {
      // @ts-ignore
      expect(CPF.validate(true)).toBeFalsy()
      expect(spy).toHaveBeenCalledWith(WARN_MESSAGE)
    })

    it('Should return undefined to false', () => {
      // @ts-ignore
      expect(CPF.validate(false)).toBeFalsy()
      expect(spy).toHaveBeenCalledWith(WARN_MESSAGE)
    })

    it('Should return undefined to null', () => {
      expect(CPF.validate(null)).toBeFalsy()
      expect(spy).toHaveBeenCalledWith(WARN_MESSAGE)
    })

    it('Should return undefined to undefined', () => {
      expect(CPF.validate(undefined)).toBeFalsy()
      expect(spy).toHaveBeenCalledWith(WARN_MESSAGE)
    })

    it('Should return undefined to an empty string', () => {
      expect(CPF.validate('')).toBeFalsy()
    })

    it('Should return undefined to no parameters', () => {
      // @ts-ignore
      expect(CPF.validate()).toBeFalsy()
      expect(spy).toHaveBeenCalledWith(WARN_MESSAGE)
    })

    it('Should return undefined to NaN', () => {
      // @ts-ignore
      expect(CPF.validate(NaN)).toBeFalsy()
    })
  })
})
