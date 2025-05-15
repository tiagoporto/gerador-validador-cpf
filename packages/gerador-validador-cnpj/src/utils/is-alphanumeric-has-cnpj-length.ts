export const isAlphanumerichHasCNPJLength = (cnpj: string) => {
  const regex = /^[0-9A-Z]+$/

  return cnpj.length === 14 && regex.test(cnpj)
}
