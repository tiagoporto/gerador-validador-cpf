import * as CPF from './CPF'

describe('generate()', () => {
  it('Should generate a valid CPF', () => {
    expect(CPF.validate(CPF.generate())).toBeTruthy()
  })
})

describe('format()', () => {
  describe('Type Number', () => {
    // it('Default formatação só digitos', () => {
    //   expect(CPF.format(13768663663) === '137.686.636-63').toBeTruthy()
    // })
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
        expect(CPF.format('137686.63663') === '137.686.636-63').toBeTruthy()
      })

      it('Faltando dígitos', () => {
        expect(CPF.format('136.6636-63') === '137.686.636-63').toBeFalsy()
      })

      it('Com outros caracteres', () => {
        expect(CPF.format('13a6.6636-63') === '137.686.636-63').toBeFalsy()
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

describe('validate()', () => {
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
    // it('Should return undefined to true', () => {
    //   expect(CPF.validate(true) === undefined).toBeTruthy()
    // })

    // it('Should return undefined to false', () => {
    //   expect(CPF.validate(false) === undefined).toBeTruthy()
    // })

    it('Should return undefined to null', () => {
      expect(CPF.validate(null) === undefined).toBeTruthy()
    })

    it('Should return undefined to undefined', () => {
      expect(CPF.validate(undefined) === undefined).toBeTruthy()
    })

    it('Should return undefined to an empty string', () => {
      expect(CPF.validate('') === undefined).toBeTruthy()
    })

    // it('Should return undefined to no parameters', () => {
    //   expect(CPF.validate() === undefined).toBeTruthy()
    // })

    it('Should return undefined to NaN', () => {
      expect(CPF.validate(NaN) === undefined).toBeTruthy()
    })
  })
})
