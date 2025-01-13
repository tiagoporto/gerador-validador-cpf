describe('validate', () => {
  it('inserting a cpf missing digits should return a incomplete message', () => {
    cy.visit('/')
    cy.get('[data-testid="validate-message"]').should('have.text', '...')

    cy.get('[data-testid="en-locale-button"]').click()
    cy.get('[data-testid="input-validate-cpf"]').type('137.686.36-63')
    cy.get('[data-testid="validate-message"]').should('have.text', 'incomplete')

    cy.get('[data-testid="pt-locale-button"]').click()
    cy.get('[data-testid="input-validate-cpf"]').clear().type('50.016.460-88')
    cy.get('[data-testid="validate-message"]').should('have.text', 'incompleto')

    cy.get('[data-testid="es-locale-button"]').click()
    cy.get('[data-testid="input-validate-cpf"]').clear().type('740846005')
    cy.get('[data-testid="validate-message"]').should('have.text', 'incompleto')
  })

  it('inserting a valid CPF should return a valid message', () => {
    cy.visit('/')

    cy.get('[data-testid="en-locale-button"]').click()
    cy.get('[data-testid="input-validate-cpf"]').type('137.686.636-63')
    cy.get('[data-testid="validate-message"]').should('have.text', 'Valid CPF')

    cy.get('[data-testid="pt-locale-button"]').click()
    cy.get('[data-testid="input-validate-cpf"]').clear().type('506.016.460-88')
    cy.get('[data-testid="validate-message"]').should('have.text', 'CPF Válido')

    cy.get('[data-testid="es-locale-button"]').click()
    cy.get('[data-testid="input-validate-cpf"]').clear().type('74082746005')
    cy.get('[data-testid="validate-message"]').should('have.text', 'CPF Válido')
  })
  it('inserting a invalid CPF should return a invalid message', () => {
    cy.visit('/')

    cy.get('[data-testid="en-locale-button"]').click()
    cy.get('[data-testid="input-validate-cpf"]').type('137.986.656-63')
    cy.get('[data-testid="validate-message"]').should(
      'have.text',
      'Invalid CPF',
    )

    cy.get('[data-testid="pt-locale-button"]').click()
    cy.get('[data-testid="input-validate-cpf"]').clear().type('11111111111')
    cy.get('[data-testid="validate-message"]').should(
      'have.text',
      'CPF Inválido',
    )

    cy.get('[data-testid="es-locale-button"]').click()
    cy.get('[data-testid="input-validate-cpf"]').clear().type('96783567825')
    cy.get('[data-testid="validate-message"]').should(
      'have.text',
      'CPF no válido',
    )
  })
})
