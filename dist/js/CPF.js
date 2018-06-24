/*!
*   Gerador e Validador de CPF v3.1.3
*   http://tiagoporto.github.io/gerador-validador-cpf
*   Copyright (c) 2014-2018 Tiago Porto (http://tiagoporto.com)
*   Released under the MIT license
*/

'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * CPF Class
 *
 * generate function
 * @param  {string} param      Formatting option
 * @return {string}            Valid and formatted CPF
 *
 * validate function
 * @param  {string} value      The value for validation
 * @return {boolean}           True = valid || False = invalid
 *
 * format function
 * @param  {string} value      The value for formatting
 * @param  {string} param      Formatting option
 *
 * @return {string}            Formatted CPF || error message
 */

(function () {
  var root = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) === 'object' && self.self === self && self || (typeof global === 'undefined' ? 'undefined' : _typeof(global)) === 'object' && global.global === global && global || this;

  var CPF = function CPF() {};

  if (typeof exports !== 'undefined' && !exports.nodeType) {
    if (typeof module !== 'undefined' && !module.nodeType && module.exports) {
      exports = module.exports = CPF;
    }

    exports.CPF = CPF;
  } else {
    root.CPF = CPF;
  }

  var calcChecker1 = function calcChecker1(firstNineDigits) {
    var sum = null;

    for (var j = 0; j < 9; ++j) {
      sum += firstNineDigits.toString().charAt(j) * (10 - j);
    }

    var lastSumChecker1 = sum % 11;
    var checker1 = lastSumChecker1 < 2 ? 0 : 11 - lastSumChecker1;

    return checker1;
  };

  var calcChecker2 = function calcChecker2(cpfWithChecker1) {
    var sum = null;

    for (var k = 0; k < 10; ++k) {
      sum += cpfWithChecker1.toString().charAt(k) * (11 - k);
    }

    var lastSumChecker2 = sum % 11;
    var checker2 = lastSumChecker2 < 2 ? 0 : 11 - lastSumChecker2;

    return checker2;
  };

  var formatCPF = function formatCPF(value, formatter) {
    var digitsSeparator = '.';
    var checkersSeparator = '-';

    if (formatter === 'digits') {
      digitsSeparator = '';
      checkersSeparator = '';
    } else if (formatter === 'checker') {
      digitsSeparator = '';
      checkersSeparator = '-';
    }

    if (value.length > 11) {
      return 'The value contains error. Has more than 11 digits.';
    } else if (value.length < 11) {
      return 'The value contains error. Has fewer than 11 digits.';
    } else {
      return value.slice(0, 3) + digitsSeparator + value.slice(3, 6) + digitsSeparator + value.slice(6, 9) + checkersSeparator + value.slice(9, 11);
    }
  };

  CPF.generate = function (param) {
    var firstNineDigits = '';

    // Generating the first 9 digits of the CPF
    for (var i = 0; i < 9; ++i) {
      firstNineDigits += String(Math.floor(Math.random() * 9));
    }

    var checker1 = calcChecker1(firstNineDigits);
    var generatedCPF = firstNineDigits + checker1 + calcChecker2(firstNineDigits + checker1);

    return formatCPF(generatedCPF, param);
  };

  CPF.validate = function (value) {
    if (!value || value === true) {
      return;
    }

    if (typeof value === 'number') {
      value = String(value);
    }

    var cleanCPF = value.replace(/\.|-|\s/g, '');
    var firstNineDigits = cleanCPF.substring(0, 9);
    var checker = cleanCPF.substring(9, 11);

    if (cleanCPF.length !== 11) {
      return false;
    }

    // Checking if all digits are equal
    for (var i = 0; i < 10; i++) {
      if ('' + firstNineDigits + checker === Array(12).join(i)) {
        return false;
      }
    }

    var checker1 = calcChecker1(firstNineDigits);
    var checker2 = calcChecker2('' + firstNineDigits + checker1);

    if (checker.toString() === checker1.toString() + checker2.toString()) {
      return true;
    } else {
      return false;
    }
  };

  CPF.format = function (value, param) {
    if (!value) {
      return;
    }

    var getCPF = value.replace(/[^\d]/g, '');

    return formatCPF(getCPF, param);
  };

  return CPF;
})();