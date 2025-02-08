export const allDigitsAreEqual = (digits: string) => {
  for (let i = 0; i < 10; i++) {
    if (digits === Array.from({ length: digits.length + 1 }).join(String(i))) {
      return true
    }
  }

  return false
}
