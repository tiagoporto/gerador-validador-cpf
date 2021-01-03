export const calcFirstChecker = (firstNineDigits: string): number => {
  let sum = 0

  for (let i = 0; i < 9; ++i) {
    sum += Number(firstNineDigits.charAt(i)) * (10 - i)
  }

  const lastSumChecker = sum % 11
  return lastSumChecker < 2 ? 0 : 11 - lastSumChecker
}

export const calcSecondChecker = (cpfWithChecker1: string): number => {
  let sum = 0

  for (let i = 0; i < 10; ++i) {
    sum += Number(cpfWithChecker1.charAt(i)) * (11 - i)
  }

  const lastSumChecker2 = sum % 11
  return lastSumChecker2 < 2 ? 0 : 11 - lastSumChecker2
}
