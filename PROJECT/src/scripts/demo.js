var CPF = new CPF();

document.getElementById('btn-gerar-CPF').onclick = function(){
	document.getElementById('CPF').innerHTML = CPF.gera();
};

document.getElementById('valida-CPF').onsubmit = function (event){

	document.getElementById('resultadoValidacao').innerHTML = CPF.valida(document.getElementById('cpf').value);

	return false;
};
