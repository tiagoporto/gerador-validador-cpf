export const calcSecondCheckDigit = (
  firstTwelveDigitsPlusFirstCheckDigit: string,
) => {
  const importanceArray = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]

  const sum = firstTwelveDigitsPlusFirstCheckDigit
    // eslint-disable-next-line unicorn/prefer-spread
    .split('')
    .map((item, index) => {
      // get ascii code
      const value = (item.codePointAt(0) ?? -1) - 48
      const importance = importanceArray[index]
      return value * importance
    })
    .reduce((previous, current) => previous + current, 0)

  const remainder = sum % 11

  return remainder < 2 ? 0 : 11 - remainder
}
