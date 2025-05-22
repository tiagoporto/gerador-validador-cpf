export const calcFirstCheckDigit = (firstTwelveDigits: string) => {
  const importanceArray = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]

  let sum = 0
  for (let i = 0; i < 12; i++) {
    const digit = (firstTwelveDigits.codePointAt(i) ?? 0) - 48
    sum += digit * importanceArray[i]
  }

  const remainder = sum % 11
  return remainder < 2 ? 0 : 11 - remainder
}
