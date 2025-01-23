import { elements } from './helpers/elements'

const incompleteCpf = () => {
  cy.visit('/')
  cy.get(elements.validateMessage).should('have.text', '...')

  cy.get(elements.enLocaleButton).click()
  cy.get(elements.inputValidateCpf).type('137.686.36-63')
  cy.get(elements.validateMessage).should('have.text', 'incomplete')

  cy.get(elements.ptLocaleButton).click()
  cy.get(elements.inputValidateCpf).clear()
  cy.get(elements.inputValidateCpf).type('50.016.460-88')
  cy.get(elements.validateMessage).should('have.text', 'incompleto')

  cy.get(elements.esLocaleButton).click()
  cy.get(elements.inputValidateCpf).clear()
  cy.get(elements.inputValidateCpf).type('740846005')
  cy.get(elements.validateMessage).should('have.text', 'incompleto')
}

const validCpf = () => {
  cy.visit('/')

  cy.get(elements.enLocaleButton).click()
  cy.get(elements.inputValidateCpf).type('137.686.636-63')
  cy.get(elements.validateMessage).should('have.text', 'Valid CPF')

  cy.get(elements.ptLocaleButton).click()
  cy.get(elements.inputValidateCpf).clear()
  cy.get(elements.inputValidateCpf).type('506.016.460-88')
  cy.get(elements.validateMessage).should('have.text', 'CPF Válido')

  cy.get(elements.esLocaleButton).click()
  cy.get(elements.inputValidateCpf).clear()
  cy.get(elements.inputValidateCpf).type('74082746005')
  cy.get(elements.validateMessage).should('have.text', 'CPF Válido')
}

const invalidCpf = () => {
  cy.visit('/')

  cy.get(elements.enLocaleButton).click()
  cy.get(elements.inputValidateCpf).type('137.986.656-63')
  cy.get(elements.validateMessage).should('have.text', 'Invalid CPF')

  cy.get(elements.ptLocaleButton).click()
  cy.get(elements.inputValidateCpf).clear()
  cy.get(elements.inputValidateCpf).type('11111111111')
  cy.get(elements.validateMessage).should('have.text', 'CPF Inválido')

  cy.get(elements.esLocaleButton).click()
  cy.get(elements.inputValidateCpf).clear()
  cy.get(elements.inputValidateCpf).type('96783567825')
  cy.get(elements.validateMessage).should('have.text', 'CPF no válido')
}

describe('validate (desktop)', () => {
  it('inserting a cpf missing digits should return a incomplete message', () => {
    incompleteCpf()
  })

  it('inserting a valid CPF should return a valid message', () => {
    validCpf()
  })

  it('inserting a invalid CPF should return a invalid message', () => {
    invalidCpf()
  })
})

describe(
  'validate (mobile)',
  {
    viewportHeight: 1000,
    viewportWidth: 400,
  },
  () => {
    it('inserting a cpf missing digits should return a incomplete message', () => {
      incompleteCpf()
    })

    it('inserting a valid CPF should return a valid message', () => {
      validCpf()
    })

    it('inserting a invalid CPF should return a invalid message', () => {
      invalidCpf()
    })
  },
)
