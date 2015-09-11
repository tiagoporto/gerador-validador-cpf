/*!
*	Gerador e Validador de CPF v2.0.0
*	https://github.com/tiagoporto/gerador-validador-cpf
*	Copyright (c) 2014-2015 Tiago Porto (http://www.tiagoporto.com)
*	Released under the MIT license
*/

/**
 * CPF Class
 *
 * gera function
 * @param  {string} formatacao Opção para fazer a formatação
 * @return {string}            CPF válido e formatado
 *
 * valida function
 * @param  {string} valor      O valor para validação
 * @return {boolean}           True para cpf válido - False para cpf inválido.
 *
 * formata function
 * @param  {string} valor      O valor para formatação
 * @param  {string} formatacao Opção para fazer a formatação
 *
 * @return {string}            O CPF formatado ou mensagem com erro da formatação.
 */
function CPF(){
	'user_strict';

	function calculoVerificador1(noveDigitos){
		var soma = null;

		for (var j = 0; j < 9; ++j) {
			soma += noveDigitos.toString().charAt(j)*(10-j);
		}

		var verificador1 = soma % 11;

		if (verificador1 < 2) {
			verificador1 = 0;
		}else {
			verificador1 = 11 - verificador1;
		}

		return verificador1;
	}

	function calculoVerificador2(cpfComVerificador1){
		var soma = null;

		for (var k = 0; k < 10; ++k){
			soma +=  cpfComVerificador1.toString().charAt(k)*(11-k);
		}

		var verificador2 = soma % 11;

		if (verificador2 < 2) {
			verificador2 = 0;
		}else {
			verificador2 = 11 - verificador2;
		}

		return verificador2;
	}

	function limpa(valor){
		var digitos = valor.replace(/\.|\-|\s/g,'');

		return digitos;
	}

	function formataCPF(value, formatacao){
		var sepDigitos = '.';
		var sepVerificador = '-';

		if (formatacao === 'digitos') {
			sepDigitos = '';
			sepVerificador = '';
		}else if (formatacao === 'verificador') {
			sepDigitos = '';
			sepVerificador = '-';
		}

		if (! /^[0-9]+$/.test(value)) {
			return 'O valor informado contém caracteres inválidos.';
		}

		if (value.length > 11 ) {
			return 'O valor informado contém erro. Está passando dígitos.';
		}else if(value.length < 11){
			return 'O valor informado contém erro. Está faltando dígitos.';

		}

		else{
			return value.slice(0, 3) + sepDigitos + value.slice(3, 6) + sepDigitos +  value.slice(6, 9) + sepVerificador +  value.slice(9, 11);
		}
	}

	this.gera = function (formatacao){
		var noveDigitos = '';

		//Gerando os 9 primeiros digitos do CPF
		for (var i = 0; i < 9; ++i) {
			noveDigitos += Math.floor(Math.random() * 9) + '';
		}

		var verificador1 = calculoVerificador1(noveDigitos);

		var cpf = noveDigitos + verificador1 + calculoVerificador2(noveDigitos + verificador1);

		return formataCPF(cpf, formatacao);
	};

	this.valida = function (valor){
		var clearCPF = limpa(valor),
			noveDigitos = clearCPF.substring(0,9),
			verificadores = clearCPF.substring(9,11);

		//Verificando se todos os digitos são iguais
		for (var i = 0; i < 10; i++){
			if('' + noveDigitos + verificadores === '' + i + i + i + i + i + i + i + i + i + i +i){
				return mensagemInvalido;
			}
		}

		var verificador1 = calculoVerificador1(noveDigitos);

		var verificador2 = calculoVerificador2(noveDigitos + '' + verificador1);

		if (verificadores.toString() === verificador1.toString() + verificador2.toString()){
			return true;
		}else{
			return false;
		}
	};

	this.formata = function (valor, formatacao){
		var CPF = limpa(valor);

		return formataCPF(CPF, formatacao);
	};

}
