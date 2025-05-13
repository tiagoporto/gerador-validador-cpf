export const calcSecondChecker = (cnpjWithChecker1: string) => {
  const importanceArray = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]

  const sum = cnpjWithChecker1
    // eslint-disable-next-line unicorn/prefer-spread
    .split('')
    .map((item, index) => {
      // get ascii code
      const value = (item.codePointAt(0) ?? -1) - 48
      const importance = importanceArray[index]
      return value * importance
    })
    .reduce((previous, current) => previous + current, 0)

  const lastSumChecker2 = sum % 11
  return lastSumChecker2 < 2 ? 0 : 11 - lastSumChecker2
}
