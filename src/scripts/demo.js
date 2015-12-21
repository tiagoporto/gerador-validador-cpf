function addClass(el, klass){
	'use strict';

	el.className += ' ' + klass;
}

function removeClass(el, klass){
	'use strict';

	var elClass = ' ' + el.className + ' ';

	while(elClass.indexOf(' ' + klass + ' ') !== -1){
		elClass = elClass.replace(' ' + klass + ' ', '');
	}

	el.className = elClass;
}

var CPF = new CPF();

document.getElementById('btn-gerar-CPF').onclick = function(){
	'use strict';

	document.getElementById('CPF').value = CPF.gera();

	ga('send', 'event', 'button', 'click', 'Generate CPF');

};


document.getElementById('valida-CPF').onsubmit = function(){
	'use strict';
	var mensagem = '';

	document.getElementById('resultado-validacao').innerHTML = '';

	setTimeout(function(){

		if ( CPF.valida(document.getElementById('cpf-validacao').value) === true ) {
			mensagem = 'CPF Válido';

			removeClass(document.getElementById('resultado-validacao'), 'invalid');
			addClass(document.getElementById('resultado-validacao'), 'valid');
		}else{
			mensagem = 'CPF Inválido';
			removeClass(document.getElementById('resultado-validacao'), 'valid');
			addClass(document.getElementById('resultado-validacao'), 'invalid');
		}


		document.getElementById('resultado-validacao').value = mensagem;
	}, 400);



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
