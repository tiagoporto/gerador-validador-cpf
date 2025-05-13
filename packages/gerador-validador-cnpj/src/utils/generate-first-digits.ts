export const generateFirstDigits = () => {
  let digits = ''

  for (let i = 0; i < 12; ++i) {
    let ascii = 0
    do {
      ascii = Math.floor(Math.random() * 43) + 48
    } while (ascii > 57 && ascii < 65)

    digits += String.fromCodePoint(ascii)
  }

  return digits
}
