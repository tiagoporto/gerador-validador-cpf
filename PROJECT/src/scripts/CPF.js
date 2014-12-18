'user_strict';

document.getElementById('btn-gerar-CPF').onclick = function geraCPF(){
	var cpf = '';
	var soma1 = null;
	var soma2 = null;
	var CPFverificador1 = null;

	//Gerando os 9 primeiros digitos do CPF
	for (var i = 0; i < 9; ++i) {
		cpf += Math.floor(Math.random() * 9) + '';
	}

	//Calculando o primeiro dígito verificador
	for (var j = 0; j < 9; ++j) {
		soma1 += cpf.toString().charAt(j)*(10-j);
	}

	var verificador1 = soma1 % 11;


	if (verificador1 < 2) {
		verificador1 = 0;
	}else {
		verificador1 = 11 - verificador1;
	}

	CPFverificador1 = cpf + '' + verificador1;

	//Calculando o segundo dígito verificador
	for (var k = 0; k < 10; ++k){
		soma2 +=  CPFverificador1.toString().charAt(k)*(11-k);
	}

	var verificador2 = soma2 % 11;

	if (verificador2 < 2) {
		verificador2 = 0;
	}else {
		verificador2 = 11 - verificador2;
	}

	cpf = cpf + '-' + verificador1 + verificador2;

	document.getElementById('CPF').innerHTML = cpf;
};

document.getElementById('valida-CPF').onsubmit = function validaCPF(event){

	var cpf = document.getElementById('cpf').value.substring(0,11).split('.').join(''),
		verificadores = document.getElementById('cpf').value.substring(12,14),
		soma1 = null,
		soma2 = null,
		CPFverificador1 = null;

	for (var i = 0; i < 10; i++) {
		if('' + cpf + verificadores === '' + i + i + i + i + i + i + i + i + i + i +i ){
			document.getElementById('resultadoValidacao').innerHTML = 'CEP inválido';
			return false;
		}
	}

	//Calculando o primeiro dígito verificador
	for (var i = 0; i < 9; ++i) {
		soma1 += cpf.toString().charAt(i)*(10-i);
	}

	var verificador1 = soma1 % 11;

	if (verificador1 < 2) {
		verificador1 = 0;
	}else {
		verificador1 = 11 - verificador1;
	}

	CPFverificador1 = cpf + '' + verificador1;

	//Calculando o segundo dígito verificador
	for (var j = 0; j < 10; ++j){
		soma2 +=  CPFverificador1.toString().charAt(j)*(11-j);
	}

	var verificador2 = soma2 % 11;

	if (verificador2 < 2) {
		verificador2 = 0;
	}else {
		verificador2 = 11 - verificador2;
	}

	if (verificadores.toString() === verificador1.toString() + verificador2.toString()) {
		document.getElementById('resultadoValidacao').innerHTML = 'CEP válido';
	}else{
		document.getElementById('resultadoValidacao').innerHTML = 'CEP inválido';
	}

	return false;

};
