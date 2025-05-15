export const calcFirstCheckDigit = (firstNineDigits: string) => {
  const sum = firstNineDigits
    // eslint-disable-next-line unicorn/prefer-spread -- avoid helper
    .split('')
    .map(Number)
    .reduce((previous, current, index) => previous + current * (10 - index), 0)

  const remainder = sum % 11
  return remainder < 2 ? 0 : 11 - remainder
}
