/*jshint -W030 */
(function(i,s,o,g,r,a,m){i.GoogleAnalyticsObject=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments);},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m);
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-32351360-4', 'auto');
ga('send', 'pageview');

var CPF = new CPF();

document.getElementById('btn-gerar-CPF').onclick = function(){

	document.getElementById('CPF').innerHTML = CPF.gera();

	ga('send', 'event', 'button', 'click', 'Generate CPF');

};

document.getElementById('valida-CPF').onsubmit = function (event){

	document.getElementById('resultadoValidacao').innerHTML = CPF.valida(document.getElementById('cpf').value);

	ga('send', 'event', 'button', 'click', 'Validate CPF');

	return false;

};


var d = new Date();

document.getElementById("year").innerHTML = d.getFullYear();

//jQuery Scripts
$(document).ready(function(){

$('#cpf').mask('999.999.999-99');

});