export declare enum formatOptions {
    digits = "digits",
    checker = "checker"
}
/**
 * generate a valid CPF number
 * @param  {string} [formatOption]   Formatting option
 * @return {string}                  Valid and formatted CPF
 */
export declare const generate: (formatOption?: formatOptions) => string;
/**
 * validate CPF numbers
 * @param  {(string|number)} value  CPF for validation
 * @return {boolean}                True = valid || False = invalid
 */
export declare const validate: (value: string | number) => boolean;
/**
 * format CPF numbers
 * @param  {(string|number)} value  Formatting value
 * @param  {string} [formatOption]  Formatting option
 *
 * @return {string}                 Formatted CPF || error message
 */
export declare const format: (value: string | number, formatOption?: formatOptions) => string | void;
