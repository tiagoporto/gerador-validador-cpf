export declare enum formatOptions {
    digits = "digits",
    checker = "checker"
}
/**
 * generate a valide CPF number
 * @param  {string} formatOption   Formatting option
 * @return {string}                Valid and formatted CPF
 */
export declare const generate: (formatOption?: formatOptions | undefined) => string;
/**
 * validate function
 * @param  {string|number} value  CPF for validation
 * @return {boolean}              True = valid || False = invalid
 */
export declare const validate: (value: string | number) => boolean;
/**
 * format function
 * @param  {string|number} value  The value for formatting
 * @param  {string} formatOption  Formatting option
 *
 * @return {string}               Formatted CPF || error message
 */
export declare const format: (value: string, formatOption?: formatOptions | undefined) => string;
