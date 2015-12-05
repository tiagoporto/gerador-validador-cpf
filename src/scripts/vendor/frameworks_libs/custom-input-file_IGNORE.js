/*!
*	Custom input file v1.0.0
*	Copyright (c) 2015 Tiago Porto (http://tiagoporto.com)
*	Released under the MIT license
*/

var inputs = document.querySelectorAll('input[type=file]');

for(var i = 0; i < inputs.length; i++) {
	if(inputs[i].type.toLowerCase() === 'file') {
		inputs[i].onchange = function () {
			this.parentNode.querySelector('input').value = this.value;
		};
	}
}
