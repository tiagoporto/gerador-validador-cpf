import { validate as validadeCpf } from '../../packages/gerador-validador-cpf'

describe('generate', async () => {
  it('should generate only valid cpfs', async () => {
    cy.visit('/')

    cy.get('[data-testid="input-generate-cpf"]')
      .invoke('val')
      .should(($cpf) => {
        // @ts-expect-error: Accepts string
        expect(validadeCpf($cpf)).to.equal(true)
      })

    cy.get('[data-testid="generate-cpf-button"]').click()
    cy.get('[data-testid="input-generate-cpf"]')
      .invoke('val')
      .should(($cpf) => {
        // @ts-expect-error: Accepts string
        expect(validadeCpf($cpf)).to.equal(true)
      })
  })
})
