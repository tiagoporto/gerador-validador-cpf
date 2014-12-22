/*!
	Gerador e Validador de CPF
	Version: 1.0.0
	Author: Tiago Porto - http://www.tiagoporto.com
	https://github.com/tiagoporto/accessibility-buttons
	Contact: me@tiagoporto.com
*/

function CPF(){
	'user_strict';

	var mensagemInvalido = 'CEP Inválido',
		mensagemValido = 'CEP Válido';

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

	this.gera = function (){
		var noveDigitos = '';

		//Gerando os 9 primeiros digitos do CPF
		for (var i = 0; i < 9; ++i) {
			noveDigitos += Math.floor(Math.random() * 9) + '';
		}

		var verificador1 = calculoVerificador1(noveDigitos);

		var cpf = noveDigitos + '-' + verificador1 + calculoVerificador2(noveDigitos + '' + verificador1);

		return cpf;
	};

	this.valida = function (cpf){
		var clearCPF = cpf.replace(/\D/g,''),
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
			return mensagemValido;
		}else{
			return mensagemInvalido;
		}
	};

}
