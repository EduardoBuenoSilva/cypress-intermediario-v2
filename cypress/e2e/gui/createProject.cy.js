import { faker } from '@faker-js/faker' // biblioteca que serve para gerar dados

const options = { env: { snapshotOnly: true } }

describe('Create Project', options, () => {
  beforeEach(() => {
    cy.api_deleteProjects()
    cy.login()
  })

  it('successfully', () => {
    const project = {
      name: `project-${faker.datatype.uuid()}`, //gera as palavras aleatórias - template  literals
      description: faker.random.words(5) // serão 5 palavras aleatórias
    }

    cy.gui_createProject(project)

    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name}`)
    cy.contains(project.name).should('be.visible')
    cy.contains(project.description).should('be.visible')
  })
})
