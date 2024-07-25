describe('Login', () => {
  it('successfully', () => {
    const user = Cypress.env('user_name')
    const password = Cypress.env('user_password')
    const options = { cacheSession: false } // não quero que faça o cache da sessão

    cy.login(user, password, options)

    cy.get('.qa-user-avatar').should('be.visible')
  })
})
