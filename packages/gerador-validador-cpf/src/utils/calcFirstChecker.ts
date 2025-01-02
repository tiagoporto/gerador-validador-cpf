export const calcFirstChecker = (firstNineDigits: string) => {
  const sum = [...firstNineDigits]
    .map(Number)
    .reduce((previous, current, index) => previous + current * (10 - index), 0)

  const lastSumChecker = sum % 11
  return lastSumChecker < 2 ? 0 : 11 - lastSumChecker
}
