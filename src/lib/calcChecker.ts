export const calcFirstChecker = (firstNineDigits: string) => {
  const sum = [...firstNineDigits]
    .map(Number)
    .reduce((previous, current, index) => previous + current * (10 - index), 0)

  const lastSumChecker = sum % 11
  return lastSumChecker < 2 ? 0 : 11 - lastSumChecker
}

export const calcSecondChecker = (cpfWithChecker1: string) => {
  const sum = [...cpfWithChecker1]
    .map(Number)
    .reduce((previous, current, index) => previous + current * (11 - index), 0)

  const lastSumChecker2 = sum % 11
  return lastSumChecker2 < 2 ? 0 : 11 - lastSumChecker2
}
