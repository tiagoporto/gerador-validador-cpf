/*!
*   Gerador e Validador de CPF v3.1.1
*   http://tiagoporto.github.io/gerador-validador-cpf
*   Copyright (c) 2014-2016 Tiago Porto (http://tiagoporto.com)
*   Released under the MIT license
*/

/* global CPF */

var date = new Date();
document.getElementsByClassName('footer__year')[0].innerHTML = date.getFullYear();

// Helper functions
var addClass = function addClass(el, klass) {
    'use strict';

    el[0].className += ' ' + klass;
};

var removeClass = function removeClass(el, klass) {
    'use strict';

    var elClass = ' ' + el[0].className + ' ';

    while (elClass.indexOf(' ' + klass + ' ') !== -1) {
        elClass = elClass.replace(' ' + klass + ' ', '');
    }

    el[0].className = elClass;
};

var setListener = function setListener(className, func, action) {
    'use strict';

    var elements = document.getElementsByClassName(className);

    Array.from(elements).forEach(function (element) {
        element.addEventListener(action, func, false);
    });
};

// CPF functions
var validate = function validate(event) {
    'use strict';

    event.preventDefault();

    var cpf = document.getElementById('validate-section__input--to-format').value;
    var validCPF = CPF.validate(cpf);
    var messageInput = document.getElementsByClassName('validate-section__input--message');
    var message = validCPF ? 'CPF Válido' : 'CPF Inválido';

    if (validCPF) {
        removeClass(messageInput, 'invalid');
        addClass(messageInput, 'valid');
    } else {
        removeClass(messageInput, 'valid');
        addClass(messageInput, 'invalid');
    }

    messageInput[0].setAttribute('value', message);

    typeof ga === 'function' && ga('send', 'event', 'button', 'click', 'Validate CPF');
};

var generate = function generate() {
    'use strict';

    document.getElementsByClassName('generate-section__input--generated')[0].setAttribute('value', CPF.generate());

    typeof ga === 'function' && ga('send', 'event', 'button', 'click', 'Generate CPF');
};

var format = function format(event) {
    'use strict';

    event.preventDefault();
    var params = document.getElementsByClassName('format-section__params')[0].value;
    var fieldValue = document.getElementById('format-section__input').value;

    document.getElementsByClassName('format-section__input--message')[0].setAttribute('value', CPF.format(fieldValue, params));

    typeof ga === 'function' && ga('send', 'event', 'button', 'click', 'Formate CPF');
};

generate();

setListener('generate-section__submit-button', generate, 'click');
setListener('validate-section__form', validate, 'submit');
setListener('format-section__form', format, 'submit');
setListener('format-section__form', format, 'submit');