/*!
*   Gerador e Validador de CPF v3.1.3
*   http://tiagoporto.github.io/gerador-validador-cpf
*   Copyright (c) 2014-2018 Tiago Porto (http://tiagoporto.com)
*   Released under the MIT license
*/

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.CPF = {})));
}(this, (function (exports) { 'use strict';

  var calcFirstChecker = function calcFirstChecker(firstNineDigits) {
    var sum = null;

    for (var j = 0; j < 9; ++j) {
      sum += firstNineDigits.toString().charAt(j) * (10 - j);
    }

    var lastSumChecker1 = sum % 11;
    var checker1 = lastSumChecker1 < 2 ? 0 : 11 - lastSumChecker1;

    return checker1;
  };

  var calcSecondChecker = function calcSecondChecker(cpfWithChecker1) {
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

  /**
   * generate a valide CPF number
   * @param  {string} param      Formatting option
   * @return {string}            Valid and formatted CPF
   */
  var generate = function generate(param) {
    var firstNineDigits = '';

    // Generating the first 9 digits of the CPF
    for (var i = 0; i < 9; ++i) {
      firstNineDigits += String(Math.floor(Math.random() * 9));
    }

    var checker1 = calcFirstChecker(firstNineDigits);
    var generatedCPF = firstNineDigits + checker1 + calcSecondChecker(firstNineDigits + checker1);

    return formatCPF(generatedCPF, param);
  };

  /**
   * validate function
   * @param  {{string|number}} value      The value for validation
   * @return {boolean}           True = valid || False = invalid
   */
  var validate = function validate(value) {
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

    var checker1 = calcFirstChecker(firstNineDigits);
    var checker2 = calcSecondChecker('' + firstNineDigits + checker1);

    if (checker.toString() === checker1.toString() + checker2.toString()) {
      return true;
    } else {
      return false;
    }
  };

  /**
   * format function
   * @param  {string} value      The value for formatting
   * @param  {string} param      Formatting option
   *
   * @return {string}            Formatted CPF || error message
   */
  var format = function format(value, param) {
    if (!value) {
      return;
    }

    var getCPF = value.replace(/[^\d]/g, '');

    return formatCPF(getCPF, param);
  };

  exports.generate = generate;
  exports.validate = validate;
  exports.format = format;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
