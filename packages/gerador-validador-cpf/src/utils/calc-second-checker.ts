export const calcSecondChecker = (cpfWithChecker1: string) => {
  const sum = cpfWithChecker1
    // eslint-disable-next-line unicorn/prefer-spread -- avoid helper
    .split('')
    .map(Number)
    .reduce((previous, current, index) => previous + current * (11 - index), 0)

  const lastSumChecker2 = sum % 11
  return lastSumChecker2 < 2 ? 0 : 11 - lastSumChecker2
}
