var CPF = new CPF();

document.getElementById('btn-gerar-CPF').onclick = function(){

	document.getElementById('CPF').innerHTML = CPF.gera();

	ga('send', 'event', 'button', 'click', 'Generate CPF');

};

document.getElementById('valida-CPF').onsubmit = function (event){

	document.getElementById('resultadoValidacao').innerHTML = CPF.valida(document.getElementById('cpf').value);

	ga('send', 'event', 'button', 'click', 'Valide CPF');

	return false;

};


var d = new Date();

document.getElementById("year").innerHTML = d.getFullYear();
