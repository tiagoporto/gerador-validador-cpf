export const allSameCharacters = (string: string) => {
  // eslint-disable-next-line unicorn/prefer-spread -- avoid helper
  return string.split('').every((char) => char === string[0])
}
