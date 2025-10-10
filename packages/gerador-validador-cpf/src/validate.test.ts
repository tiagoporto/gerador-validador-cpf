import { describe, expect, it } from '@jest/globals'

import { validate } from './index.js'

describe('validate cpf', () => {
  describe('passing string', () => {
    it('should return true to a valid CPF', () => {
      expect.hasAssertions()

      expect(validate('13768663663')).toBeTruthy()
      expect(validate('83117383000')).toBeTruthy()
      expect(validate('65009596393')).toBeTruthy()
      expect(validate('93177985359')).toBeTruthy()
    })

    it('should return true to a valid CPF starting with 0', () => {
      expect.assertions(2)

      expect(validate('06325112733')).toBeTruthy()
      expect(validate('03539780351')).toBeTruthy()
    })

    it.each([
      '00000000000001',
      '11111111111111',
      '22222222222222',
      '33333333333333',
      '44444444444444',
      '55555555555555',
      '66666666666666',
      '77777777777777',
      '88888888888888',
      '99999999999999',
    ])('should return false if characters repeated equal %i', (value) => {
      expect.assertions(1)

      expect(validate(value)).toBeFalsy()
    })

    it('should return false to a non valid CPF', () => {
      expect.assertions(1)

      expect(validate('123456789012')).toBeFalsy()
    })

    it('should return true to a valid formatted CPF', () => {
      expect.assertions(2)

      expect(validate('137.686.636-63')).toBeTruthy()
      expect(validate('831.173.830-00')).toBeTruthy()
    })

    it('should return false to a non valid formatted CPF', () => {
      expect.assertions(2)

      expect(validate('064.875.987-10')).toBeFalsy()
      expect(validate('364.848.987-89')).toBeFalsy()
    })

    it('should return true to a valid non formatted CPF', () => {
      expect.assertions(2)

      expect(validate('13768663663')).toBeTruthy()
      expect(validate('83117383000')).toBeTruthy()
    })

    it('should return false to a non valid non formatted CPF', () => {
      expect.assertions(2)

      expect(validate('06487598710')).toBeFalsy()
      expect(validate('36484898789')).toBeFalsy()
    })

    it('should return false to a value missing digits', () => {
      expect.assertions(1)

      expect(validate('1376866366')).toBeFalsy()
    })

    it('should return false to a value with more than 11 digits', () => {
      expect.assertions(1)

      expect(validate('137686636631')).toBeFalsy()
    })

    it('should return false to letters and special characters', () => {
      expect.hasAssertions()

      expect(validate('abc.def.ghi-jk')).toBeFalsy()
      expect(validate('a064.875.987-10')).toBeFalsy()
      expect(validate('03r5.397.803-51')).toBeFalsy()
      expect(validate('13866a3663b')).toBeFalsy()
      expect(validate('a06487598710')).toBeFalsy()
      expect(validate('0&.*00.00a-00')).toBeFalsy()
      expect(validate('00?.*00.01a-89')).toBeFalsy()
      expect(validate('?.**-%^(%(')).toBeFalsy()
    })

    it('should return true to a valid CPF where first verifier is 0', () => {
      expect.hasAssertions()

      expect(validate('763.818.422-02')).toBeTruthy()
      expect(validate('76381842202')).toBeTruthy()
      expect(validate('700.730.910-06')).toBeTruthy()
      expect(validate('70073091006')).toBeTruthy()
      expect(validate('092.766.660-01')).toBeTruthy()
      expect(validate('09276666001')).toBeTruthy()
    })

    it('should return true to a valid CPF where first verifier is higher than 0', () => {
      expect.hasAssertions()

      expect(validate('125.828.106-65')).toBeTruthy()
      expect(validate('12582810665')).toBeTruthy()
      expect(validate('603.806.430-30')).toBeTruthy()
      expect(validate('60380643030')).toBeTruthy()
      expect(validate('642.600.660-21')).toBeTruthy()
      expect(validate('64260066021')).toBeTruthy()
    })

    it('should return true to a valid CPF where second verifier is 0', () => {
      expect.hasAssertions()

      expect(validate('433.787.588-30')).toBeTruthy()
      expect(validate('43378758830')).toBeTruthy()
      expect(validate('107.481.420-70')).toBeTruthy()
      expect(validate('10748142070')).toBeTruthy()
      expect(validate('977.132.560-40')).toBeTruthy()
      expect(validate('97713256040')).toBeTruthy()
    })

    it('should return true to a valid CPF where second verifier is higher than 0', () => {
      expect.hasAssertions()

      expect(validate('855.178.021-25')).toBeTruthy()
      expect(validate('85517802125')).toBeTruthy()
      expect(validate('117.227.280-86')).toBeTruthy()
      expect(validate('11722728086')).toBeTruthy()
      expect(validate('671.174.020-32')).toBeTruthy()
      expect(validate('67117402032')).toBeTruthy()
    })
  })

  describe('passing no values', () => {
    it('should return false to an empty string', () => {
      expect.assertions(1)

      expect(validate('')).toBeFalsy()
    })

    it('should return false to a number', () => {
      expect.assertions(1)

      // @ts-expect-error: Accepts string
      expect(validate(23_497_685_000)).toBeFalsy()
    })

    it('should return false to true', () => {
      expect.assertions(1)

      // @ts-expect-error: Accepts string
      expect(validate(true)).toBeFalsy()
    })

    it('should return false to false', () => {
      expect.assertions(1)

      // @ts-expect-error: Accepts string
      expect(validate(false)).toBeFalsy()
    })

    it('should return false to null', () => {
      expect.assertions(1)

      // @ts-expect-error: Accepts string
      expect(validate(null)).toBeFalsy()
    })

    it('should return false to undefined', () => {
      expect.assertions(1)

      // @ts-expect-error: Missing parameter
      expect(validate()).toBeFalsy()
    })

    it('should return false to NaN', () => {
      expect.assertions(1)

      // @ts-expect-error: Accepts string
      expect(validate(Number.NaN)).toBeFalsy()
    })

    it('should return false to an object', () => {
      expect.assertions(1)

      // @ts-expect-error: Accepts string
      expect(validate({})).toBeFalsy()
    })

    it('should return false to an array', () => {
      expect.assertions(1)

      // @ts-expect-error: Accepts string
      expect(validate([])).toBeFalsy()
    })
  })
})
