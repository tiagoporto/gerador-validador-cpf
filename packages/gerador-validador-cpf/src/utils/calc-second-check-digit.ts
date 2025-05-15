export const calcSecondCheckDigit = (
  firstNineDigitsPlusFirstCheckDigit: string,
) => {
  const sum = firstNineDigitsPlusFirstCheckDigit
    // eslint-disable-next-line unicorn/prefer-spread -- avoid helper
    .split('')
    .map(Number)
    .reduce((previous, current, index) => previous + current * (11 - index), 0)

  const remainder = sum % 11
  return remainder < 2 ? 0 : 11 - remainder
}
