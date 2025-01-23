import { elements } from './helpers/elements'
import { validate as validadeCpf } from '../../packages/gerador-validador-cpf'

const generateCpf = () => {
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
}

describe('generate (desktop)', () => {
  it('should generate only valid cpfs', () => {
    generateCpf()
  })
})

describe(
  'generate (mobile)',
  {
    viewportHeight: 1000,
    viewportWidth: 400,
  },
  () => {
    it('should generate only valid cpfs', () => {
      generateCpf()
    })
  },
)
