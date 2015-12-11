describe("Validando CPF", function () {
	var cpf = new CPF();

	it("Número válido", function () {
		expect(cpf.valida('13768663663')).toBeTruthy();
	})

	it("Número válido", function () {
		expect(cpf.valida('137.686.636-63')).toBeTruthy();
	})

	it("Número válido", function () {
		expect(cpf.valida('137686636-63')).toBeTruthy();
	})

	it("Número inválido", function () {
		expect(cpf.valida('064.875.987-10')).toBeFalsy();
	})

	it("Números iguais", function () {
		expect(cpf.valida('00000000000')).toBeFalsy();
	})

	it("Dígitos a mais e caracteres fora do padrão", function () {
		expect(cpf.valida('&*00.000.00a-00')).toBeFalsy();
	})
});

describe("Gerando CPF", function () {
	var cpf = new CPF();

	it("Número válido", function () {
		expect(cpf.valida( cpf.gera() )).toBeTruthy();
	})
});

describe("Formatando CPF", function () {
	var cpf = new CPF();

	it("Default formatação só digitos", function () {
		expect(cpf.formata( '13768663663' ) === '137.686.636-63'  ).toBeTruthy();
	})

	it("Default formatação com pontuação", function () {
		expect(cpf.formata('137.686.636-63') === '137.686.636-63'  ).toBeTruthy();
	})

	it("Formatação Digitos", function () {
		expect(cpf.formata('13768663663', 'digitos') === '13768663663'  ).toBeTruthy();
	})

	it("Formatação Verificador", function () {
		expect(cpf.formata('13768663663', 'verificador') === '137686636-63'  ).toBeTruthy();
	})

});

describe("Formatando CPF com input errado", function () {
	var cpf = new CPF();

	it("Passando dígitos", function () {
		expect(cpf.formata('137686.663663') === '137.686.636-63'  ).toBeFalsy();
	})

	it("Faltando dígitos", function () {
		expect(cpf.formata('136.6636-63') === '137.686.636-63'  ).toBeFalsy();
	})

	it("Com outros caracteres", function () {
		expect(cpf.formata('13a6.6636-63') === '137.686.636-63'  ).toBeFalsy();
	})
});