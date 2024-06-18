/// <reference.types='Cypress'./>

describe ('Central de atendimento ao cliente TAT', function() { 
//  Open cypress|set".only"
Cypress.on('uncaught:exception', () => {

    return false;

  });
  beforeEach(() => {
    localStorage.clear();
  });

    it|('Verifica o título da aplicação', function() {
           cy.visit('C:\Users\mar\cypress-basico-v2\cypress-basico-v2\src\index.html')

           cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
           
    })   
})
