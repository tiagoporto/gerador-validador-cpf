/*!
*   Gerador e Validador de CPF v3.1.1
*   https://github.com/tiagoporto/gerador-validador-cpf
*   Copyright (c) 2014-2016 Tiago Porto (http://www.tiagoporto.com)
*   Released under the MIT license
*/

/*global CPF*/

var date = new Date();
document.getElementsByClassName('footer__year')[0].innerHTML = date.getFullYear();

//Helper functions
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

//CPF functions
var validate = function validate() {
    'use strict';

    event.preventDefault();

    var cpf = document.getElementById('validate-section__input--to-format').value,
        validCPF = CPF.validate(cpf),
        messageInput = document.getElementsByClassName('validate-section__input--message'),
        message = validCPF ? 'CPF Válido' : 'CPF Inválido';

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

var format = function format() {
    'use strict';

    event.preventDefault();
    var params = document.getElementsByClassName('format-section__params')[0].value,
        fieldValue = document.getElementById('format-section__input').value;

    document.getElementsByClassName('format-section__input--message')[0].setAttribute('value', CPF.format(fieldValue, params));

    typeof ga === 'function' && ga('send', 'event', 'button', 'click', 'Formate CPF');
};

// Download analytcs
var downloadDev = function downloadDev() {
    'use strict';

    typeof ga === 'function' && ga('send', 'event', 'download', 'click', 'Download Dev version');
};

var downloadProd = function downloadProd() {
    'use strict';

    typeof ga === 'function' && ga('send', 'event', 'download', 'click', 'Download Production version');
};

setListener('generate-section__submit-button', generate, 'click');
setListener('validate-section__form', validate, 'submit');
setListener('format-section__form', format, 'submit');
setListener('format-section__form', format, 'submit');
setListener('download-development', downloadDev, 'click');
setListener('download-production', downloadProd, 'click');