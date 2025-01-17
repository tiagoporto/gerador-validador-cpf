import { elements } from './helpers/elements'
import { validate as validadeCpf } from '../../packages/gerador-validador-cpf'

describe('generate', async () => {
  it('should generate only valid cpfs', () => {
    cy.visit('/')

    cy.get(elements.inputGenerateCpf)
      .invoke('val')
      .should(($cpf) => {
        // @ts-expect-error: Accepts string
        expect(validadeCpf($cpf)).to.equal(true)
      })

    cy.get(elements.generateCpfButton).click()
    cy.get(elements.inputGenerateCpf)
      .invoke('val')
      .should(($cpf) => {
        // @ts-expect-error: Accepts string
        expect(validadeCpf($cpf)).to.equal(true)
      })
  })
})
