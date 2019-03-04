/*!
*   Gerador e Validador de CPF v4.0.0-beta.0
*   http://tiagoporto.github.io/gerador-validador-cpf
*   Copyright (c) 2014-2019 Tiago Porto (http://tiagoporto.com)
*   Released under the MIT license
*/

/* eslint no-console: ["error", { allow: ["error", "warn"] }] */
var formatOptions;

(function (formatOptions) {
  formatOptions["digits"] = "digits";
  formatOptions["checker"] = "checker";
})(formatOptions || (formatOptions = {}));

var calcFirstChecker = function calcFirstChecker(firstNineDigits) {
  var sum = null;

  for (var j = 0; j < 9; ++j) {
    sum += Number(firstNineDigits.toString().charAt(j)) * (10 - j);
  }

  var lastSumChecker1 = sum % 11;
  var checker1 = lastSumChecker1 < 2 ? 0 : 11 - lastSumChecker1;
  return checker1;
};

var calcSecondChecker = function calcSecondChecker(cpfWithChecker1) {
  var sum = null;

  for (var k = 0; k < 10; ++k) {
    sum += Number(cpfWithChecker1.toString().charAt(k)) * (11 - k);
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
    return console.error('The value contains error. Has more than 11 digits.');
  } else if (value.length < 11) {
    return console.error('The value contains error. Has fewer than 11 digits.');
  } else {
    return value.slice(0, 3) + digitsSeparator + value.slice(3, 6) + digitsSeparator + value.slice(6, 9) + checkersSeparator + value.slice(9, 11);
  }
};
/**
 * generate a valid CPF number
 * @param  {string} [formatOption]   Formatting option
 * @return {string}                  Valid and formatted CPF
 */


var generate = function generate(formatOption) {
  var firstNineDigits = ''; // Generating the first CPF's 9 digits

  for (var i = 0; i < 9; ++i) {
    firstNineDigits += String(Math.floor(Math.random() * 9));
  }

  var checker1 = calcFirstChecker(Number(firstNineDigits));
  var generatedCPF = firstNineDigits + checker1 + calcSecondChecker(Number(firstNineDigits + checker1));
  return formatCPF(generatedCPF, formatOption);
};
/**
 * validate CPF numbers
 * @param  {(string|number)} value  CPF for validation
 * @return {boolean}                True = valid || False = invalid
 */

var validate = function validate(value) {
  if (typeof value !== 'string' && typeof value !== 'number') {
    console.warn('Unsupported value');
    return false;
  }

  var cleanCPF = String(value).replace(/\.|-|\s/g, '');
  var firstNineDigits = cleanCPF.substring(0, 9);
  var checker = cleanCPF.substring(9, 11);

  if (cleanCPF.length !== 11) {
    return false;
  } // Checking if all digits are equal


  for (var i = 0; i < 10; i++) {
    if ("" + firstNineDigits + checker === Array(12).join(String(i))) {
      return false;
    }
  }

  var checker1 = calcFirstChecker(Number(firstNineDigits));
  var checker2 = calcSecondChecker(Number("" + firstNineDigits + checker1));
  return checker.toString() === checker1.toString() + checker2.toString();
};
/**
 * format CPF numbers
 * @param  {(string|number)} value  Formatting value
 * @param  {string} [formatOption]  Formatting option
 *
 * @return {string}                 Formatted CPF || error message
 */

var format = function format(value, formatOption) {
  if (!value) {
    return;
  }

  var getCPF = String(value).replace(/[^\d]/g, '');
  return formatCPF(getCPF, formatOption);
};

export { formatOptions, generate, validate, format };
