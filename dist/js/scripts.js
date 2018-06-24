/*!
*   Gerador e Validador de CPF v3.1.3
*   http://tiagoporto.github.io/gerador-validador-cpf
*   Copyright (c) 2014-2018 Tiago Porto (http://tiagoporto.com)
*   Released under the MIT license
*/

jQuery(document).ready(function ($) {

'use strict';

/* global CPF ga */

var date = new Date();
document.getElementsByClassName('footer__year')[0].innerHTML = date.getFullYear();

// Helper functions
var addClass = function addClass(el, klass) {
  el[0].className += ' ' + klass;
};

var removeClass = function removeClass(el, klass) {
  var elClass = ' ' + el[0].className + ' ';

  while (elClass.indexOf(' ' + klass + ' ') !== -1) {
    elClass = elClass.replace(' ' + klass + ' ', '');
  }

  el[0].className = elClass;
};

var setListener = function setListener(className, func, action) {
  var elements = document.getElementsByClassName(className);

  Array.from(elements).forEach(function (element) {
    element.addEventListener(action, func, false);
  });
};

// CPF functions
var validate = function validate(event) {
  event.preventDefault();

  var cpf = document.getElementById('validate-section__input--to-format').value;
  var validCPF = CPF.validate(cpf);
  var messageInput = document.getElementsByClassName('validate-section__input--message');
  var message = validCPF ? 'CPF Válido' : 'CPF Inválido';

  if (validCPF) {
    removeClass(messageInput, 'validate-section__input--invalid');
    addClass(messageInput, 'validate-section__input--valid');
  } else {
    removeClass(messageInput, 'validate-section__input--valid');
    addClass(messageInput, 'validate-section__input--invalid');
  }

  messageInput[0].setAttribute('value', message);

  typeof ga === 'function' && ga('send', 'event', 'button', 'click', 'Validate CPF');
};

var generate = function generate() {
  document.getElementsByClassName('generate-section__input--generated')[0].setAttribute('value', CPF.generate());

  typeof ga === 'function' && ga('send', 'event', 'button', 'click', 'Generate CPF');
};

var format = function format(event) {
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

/* global ga */

jQuery(document).ready(function () {
  var QRBox = $('#QRBox');
  var MainBox = $('#MainBox');
  var BTCQR = 'img/BTCQR.png';
  var LTCQR = 'img/LTCQR.png';
  var showQR = function showQR(QR) {
    QR && MainBox.css('background-image', 'url(\'' + QR + '\')');

    $('#DonateText,#donateBox,#github').addClass('blur');
    QRBox.fadeIn(300, function (argument) {
      MainBox.addClass('showQR');
    });
  };

  $('#donateBox>li').click(function (event) {
    var thisID = $(this).attr('id');

    typeof ga === 'function' && ga('send', 'event', 'button', 'click', thisID);

    if (thisID === 'BTC') {
      showQR(BTCQR);
      var inputhidden = $($(this).attr('data-clipboard-target'));
      new Clipboard('#BTC', {
        text: function text(trigger) {
          return inputhidden.val();
        }
      });
    }

    if (thisID === 'LTC') {
      showQR(LTCQR);
      var _inputhidden = $($(this).attr('data-clipboard-target'));
      new Clipboard('#LTC', {
        text: function text(trigger) {
          return _inputhidden.val();
        }
      });
    }
  });

  MainBox.click(function (event) {
    MainBox.removeClass('showQR').addClass('hideQR');

    setTimeout(function () {
      QRBox.fadeOut(300, function (argument) {
        MainBox.removeClass('hideQR');
      });
      $('#DonateText,#donateBox,#github').removeClass('blur');
    }, 600);
  });
});
});