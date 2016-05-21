/*global CPF*/


const date = new Date();
document.getElementsByClassName('footer__year')[0].innerHTML = date.getFullYear();


const addClass = (el, klass) => {
    'use strict';
    el[0].className += ' ' + klass;
};

const removeClass = (el, klass) => {
    'use strict';
    var elClass = ' ' + el[0].className + ' ';

    while(elClass.indexOf(' ' + klass + ' ') !== -1){
        elClass = elClass.replace(' ' + klass + ' ', '');
    }

    el[0].className = elClass;
};

const setListener = (className, func, action) => {
    'use strict';

    const elements = document.getElementsByClassName(className);

    Array.from(elements).forEach( (element) => {
        element.addEventListener(action, func, false);
    });
};


const validate = () => {
    'use strict';
    event.preventDefault();

    const cpf = document.getElementById('validate-section__input--to-format').value,
        validCPF = CPF.valida(cpf),
        messageInput = document.getElementsByClassName('validate-section__input--message'),
        message = (validCPF) ? 'CPF Válido' : 'CPF Inválido';

    if (validCPF) {
        removeClass(messageInput, 'invalid');
        addClass(messageInput, 'valid');
    }else{
        removeClass(messageInput, 'valid');
        addClass(messageInput, 'invalid');
    }

    messageInput[0].setAttribute('value', message);

    typeof ga === 'function' && ga('send', 'event', 'button', 'click', 'Validate CPF');
};

const generate = () => {
    'use strict';
    document.getElementsByClassName('generate-section__input--generated')[0].setAttribute('value', CPF.gera());

    typeof ga === 'function' && ga('send', 'event', 'button', 'click', 'Generate CPF');
};

const format = () => {
    'use strict';
    event.preventDefault();
    const params = document.getElementsByClassName('format-section__params')[0].value,
        cpfField = document.getElementById('format-section__input').value;


    document.getElementsByClassName('format-section__input--message')[0].setAttribute('value', CPF.formata(cpfField, params));

    typeof ga === 'function' && ga('send', 'event', 'button', 'click', 'Formate CPF');
};



const downloadDev = () => {
    'use strict';

    typeof ga === 'function' && ga('send', 'event', 'download', 'click', 'Download versão Não Compactada');
};

const downloadProd = () => {
    'use strict';

    typeof ga === 'function' && ga('send', 'event', 'download', 'click', 'Download versão Compactada');
};


setListener('generate-section__submit-button', generate, 'click');
setListener('validate-section__form', validate, 'submit');
setListener('format-section__form', format, 'submit');
setListener('format-section__form', format, 'submit');
setListener('download-development', downloadDev, 'click');
setListener('download-production', downloadProd, 'click');
