/*!	{Title} v0.0.1
*	Project Home page
*	Copyright (c) initialyear-atualyear Author Name (Site)
*	Released under the MIT license
*/


var CPF = new CPF();

document.getElementById('btn-gerar-CPF').onclick = function(){
	'use strict';

	document.getElementById('CPF').innerHTML = CPF.gera();

	ga('send', 'event', 'button', 'click', 'Generate CPF');

};


document.getElementById('valida-CPF').onsubmit = function(){
	'use strict';
	var mensagem = '';

	if ( CPF.valida(document.getElementById('cpf-validacao').value) === true ) {
		mensagem = 'CPF Válido';
	}else{
		mensagem = 'CPF Inválido';
	}

	document.getElementById('resultado-validacao').innerHTML = mensagem;

	ga('send', 'event', 'button', 'click', 'Validate CPF');

	return false;

};

document.getElementById('formata-CPF').onsubmit = function(){
	'use strict';

	document.getElementById('resultado-formatacao').innerHTML = CPF.formata(document.getElementById('cpf-formatacao').value, document.getElementById('formatacao').value);

	ga('send', 'event', 'button', 'click', 'Formate CPF');

	return false;

};

document.getElementById('download-nao-compactada').onclick = function(){
	'use strict';

	ga('send', 'event', 'download', 'click', 'Download versão Não Compactada');

};


document.getElementById('download-compactada').onclick = function(){
	'use strict';

	ga('send', 'event', 'download', 'click', 'Download versão Compactada');

};


var d = new Date();

document.getElementById('year').innerHTML = d.getFullYear();
