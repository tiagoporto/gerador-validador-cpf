import { describe, expect, it } from '@jest/globals'

import { validate } from './index.js'

describe('validate cnpj', () => {
  describe('passing string', () => {
    it('should return true to a valid CNPJ', () => {
      expect(validate('71864644000176')).toBeTruthy()
      expect(validate('85538688000110')).toBeTruthy()
      expect(validate('01512551000105')).toBeTruthy()
      expect(validate('04740842000130')).toBeTruthy()
      expect(
        validate('12ABC34501DE35', { validateAlphanumeric: true }),
      ).toBeTruthy()
    })

    it.each([
      '00000000000000',
      '11111111111111',
      '22222222222222',
      '33333333333333',
      '44444444444444',
      '55555555555555',
      '66666666666666',
      '77777777777777',
      '88888888888888',
      '99999999999999',
      'AAAAAAAAAAAAAA',
    ])('should return false if characters repeated equal %i', (value) => {
      expect(validate(value)).toBeFalsy()
    })

    it('should return false to a non valid CNPJ', () => {
      expect(validate('12345678901223')).toBeFalsy()
      expect(
        validate('12ABC34501DE36', { validateAlphanumeric: true }),
      ).toBeFalsy()
    })

    it('should return true to a valid formatted CNPJ', () => {
      expect(validate('31.680.509/0001-56')).toBeTruthy()
      expect(validate('88.463.782/0001-46')).toBeTruthy()
      expect(
        validate('12.ABC.345/01DE-35', { validateAlphanumeric: true }),
      ).toBeTruthy()
    })

    it('should return false to a non valid formatted CNPJ', () => {
      expect(validate('31.680.500/0303-76')).toBeFalsy()
      expect(validate('12.463.562/0001-55')).toBeFalsy()
      expect(
        validate('12.ABC.345/01DE-36', { validateAlphanumeric: true }),
      ).toBeFalsy()
    })

    it('should return true to a valid non formatted CNPJ', () => {
      expect(validate('16668781000127')).toBeTruthy()
      expect(validate('13377014000170')).toBeTruthy()
    })

    it('should return false to a non valid non formatted CNPJ', () => {
      expect(validate('06487598710324')).toBeFalsy()
      expect(validate('36484898789245')).toBeFalsy()
    })

    it('should return false to a value missing characters', () => {
      expect(validate('1376866366')).toBeFalsy()
      expect(
        validate('12ABC3450136', { validateAlphanumeric: true }),
      ).toBeFalsy()
    })

    it('should return false to a value with more than 11 characters', () => {
      expect(validate('137686636631')).toBeFalsy()
      expect(
        validate('12ABC3450136ABCD', { validateAlphanumeric: true }),
      ).toBeFalsy()
    })

    it('should return false when has small case and special characters', () => {
      expect(validate('31.68$.509/00@1-56')).toBeFalsy()
      expect(validate('3168$50900@156')).toBeFalsy()
      expect(
        validate('31.a8a.509/0001-56', { validateAlphanumeric: true }),
      ).toBeFalsy()
      expect(validate('8*.220.15ˆ/0001-50')).toBeFalsy()
      expect(validate('22.2-7.89?/0001-78')).toBeFalsy()
      expect(validate('9}9!13+30001%8')).toBeFalsy()
    })

    it('should return true to a valid CNPJ where first verifier is 0', () => {
      expect(validate('50.684.126/0001-09')).toBeTruthy()
      expect(validate('50684126000109')).toBeTruthy()
      expect(validate('95.191.398/0001-05')).toBeTruthy()
      expect(validate('95191398000105')).toBeTruthy()
      expect(validate('13.997.070/0001-08')).toBeTruthy()
      expect(validate('13997070000108')).toBeTruthy()
    })

    it('should return true to a valid CNPJ where first verifier is higher than 0', () => {
      expect(validate('59.778.955/0001-17')).toBeTruthy()
      expect(validate('59778955000117')).toBeTruthy()
      expect(validate('53.023.251/0001-58')).toBeTruthy()
      expect(validate('53023251000158')).toBeTruthy()
      expect(validate('50.183.852/0001-30')).toBeTruthy()
      expect(validate('50183852000130')).toBeTruthy()
    })

    it('should return true to a valid CNPJ where second verifier is 0', () => {
      expect(validate('27.280.200/0001-00')).toBeTruthy()
      expect(validate('27280200000100')).toBeTruthy()
      expect(validate('85.150.377/0001-80')).toBeTruthy()
      expect(validate('85150377000180')).toBeTruthy()
      expect(validate('38.819.351/0001-00')).toBeTruthy()
      expect(validate('38819351000100')).toBeTruthy()
    })

    it('should return true to a valid CNPJ where second verifier is higher than 0', () => {
      expect(validate('82.274.708/0001-03')).toBeTruthy()
      expect(validate('82274708000103')).toBeTruthy()
      expect(validate('48.347.359/0001-66')).toBeTruthy()
      expect(validate('48347359000166')).toBeTruthy()
      expect(validate('11.281.380/0001-04')).toBeTruthy()
      expect(validate('11281380000104')).toBeTruthy()
    })
  })

  describe('passing no values', () => {
    it('should return false to an empty string', () => {
      expect(validate('')).toBeFalsy()
    })
    it('should return false to a number', () => {
      // @ts-expect-error: Accepts string
      expect(validate(23_497_685_000_129)).toBeFalsy()
    })
    it('should return false to true', () => {
      // @ts-expect-error: Accepts string
      expect(validate(true)).toBeFalsy()
    })
    it('should return false to false', () => {
      // @ts-expect-error: Accepts string
      expect(validate(false)).toBeFalsy()
    })
    it('should return false to null', () => {
      // @ts-expect-error: Accepts string
      expect(validate(null)).toBeFalsy()
    })
    it('should return false to undefined', () => {
      // @ts-expect-error: Missing parameter
      expect(validate()).toBeFalsy()
    })
    it('should return false to NaN', () => {
      // @ts-expect-error: Accepts string
      expect(validate(Number.NaN)).toBeFalsy()
    })
    it('should return false to an object', () => {
      // @ts-expect-error: Accepts string
      expect(validate({})).toBeFalsy()
    })
    it('should return false to an array', () => {
      // @ts-expect-error: Accepts string
      expect(validate([])).toBeFalsy()
    })
  })
})
