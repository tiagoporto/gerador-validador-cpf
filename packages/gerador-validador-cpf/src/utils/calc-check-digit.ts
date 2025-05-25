export const calcCheckDigit = (cpf: string, importanceArray: number[]) => {
  let sum = 0

  // eslint-disable-next-line unicorn/no-for-loop
  for (let i = 0; i < cpf.length; ++i) {
    const calcValue = Number(cpf[i]) * importanceArray[i]

    sum += calcValue
  }

  const remainder = sum % 11

  return remainder < 2 ? 0 : 11 - remainder
}
