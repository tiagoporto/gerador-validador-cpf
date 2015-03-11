var CPF = new CPF();

document.getElementById('btn-gerar-CPF').onclick = function(){

	document.getElementById('CPF').innerHTML = CPF.gera();

	ga('send', 'event', 'button', 'click', 'Generate CPF');

};

document.getElementById('valida-CPF').onsubmit = function (event){

	document.getElementById('resultado-validacao').innerHTML = CPF.valida(document.getElementById('cpf-validacao').value);

	ga('send', 'event', 'button', 'click', 'Validate CPF');

	return false;

};

document.getElementById('formata-CPF').onsubmit = function (event){

	document.getElementById('resultado-formatacao').innerHTML = CPF.formata(document.getElementById('cpf-formatacao').value, document.getElementById('formatacao').value);

	ga('send', 'event', 'button', 'click', 'Formate CPF');

	return false;

};


var d = new Date();

document.getElementById('year').innerHTML = d.getFullYear();
