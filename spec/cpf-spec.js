/*eslint-env jasmine */
/*global CPF*/
/*eslint strict: ["error", "global"]*/
'use strict';

describe('Validando CPF', function () {

    it('Número válido', function () {
        expect(CPF.validate('13768663663')).toBeTruthy();
    });

    it('Número válido', function () {
        expect(CPF.validate('137.686.636-63')).toBeTruthy();
    });

    it('Número válido', function () {
        expect(CPF.validate('137686636-63')).toBeTruthy();
    });

    it('Número inválido', function () {
        expect(CPF.validate('064.875.987-10')).toBeFalsy();
    });

    it('Número inválido', function () {
        expect(CPF.validate('064.875.987-10a')).toBeFalsy();
    });

    it('Número inválido', function () {
        expect(CPF.validate('a064.875.987-10')).toBeFalsy();
    });

    it('Números iguais', function () {
        expect(CPF.validate('00000000000')).toBeFalsy();
    });

    it('Dígitos a mais e caracteres fora do padrão', function () {
        expect(CPF.validate('&*00.000.00a-00')).toBeFalsy();
    });
});

describe('Gerando CPF', function () {
    it('Número válido', function () {
        expect(CPF.validate( CPF.generate() )).toBeTruthy();
    });
});

describe('Verificando os verificador', function () {
    it('Verificador 1 = 0', function () {
        expect(CPF.validate('76381842202')).toBeTruthy();
    });

    it('Verificador 1 > 1', function () {
        expect(CPF.validate('125.828.106-65')).toBeTruthy();
    });

    it('Verificador 2 = 0', function () {
        expect(CPF.validate('433.787.588-30')).toBeTruthy();
    });

    it('Verificador 2 > 1', function () {
        expect(CPF.validate('855.178.021-25')).toBeTruthy();
    });
});

describe('Formatando CPF', function () {
    it('Default formatação só digitos', function () {
        expect(CPF.format( '13768663663' ) === '137.686.636-63').toBeTruthy();
    });

    it('Default formatação com pontuação', function () {
        expect(CPF.format('137.686.636-63') === '137.686.636-63').toBeTruthy();
    });

    it('Formatação Digitos', function () {
        expect(CPF.format('13768663663', 'digits') === '13768663663').toBeTruthy();
    });

    it('Formatação Verificador', function () {
        expect(CPF.format('13768663663', 'checker') === '137686636-63').toBeTruthy();
    });

});

describe('Formatando CPF com input errado', function () {
    it('Passando dígitos', function () {
        expect(CPF.format('137686.663663') === '137.686.636-63').toBeFalsy();
    });

    it('Faltando dígitos', function () {
        expect(CPF.format('136.6636-63') === '137.686.636-63').toBeFalsy();
    });

    it('Com outros caracteres', function () {
        expect(CPF.format('13a6.6636-63') === '137.686.636-63').toBeFalsy();
    });
});
