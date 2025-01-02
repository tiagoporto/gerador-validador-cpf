export const generateFirstDigits = () => {
  let digits = ''
  for (let i = 0; i < 9; ++i) {
    digits += String(Math.floor(Math.random() * 10))
  }

  return digits
}
