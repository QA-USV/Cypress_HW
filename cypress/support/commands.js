/* eslint-disable no-undef */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, password) => {
    cy.contains('Log in')
      .click()
    cy.get('#mail')
      .type(email)
    cy.get('#pass')
      .type(password)
    cy.contains('Submit')
      .click() 
})

Cypress.Commands.add('addNewBook', (book) => {
    cy.get('.p-0 > .btn')
      .contains('Add new')
      .click()
    cy.get('#title')
      .type(book.title)
    cy.get('#description')
      .type(book.description)
    cy.get('#fileCover')
      .should('not.be.disabled')
    cy.get('#fileBook')
      .should('not.be.disabled')
    cy.get('#authors')
      .type(book.authors)
    cy.get('form > .ml-2')
      .contains('Submit')
      .click()
})

Cypress.Commands.add('addBookToFavorites', (book) => {
    cy.get('.text-light > .ml-2')
      .click()
    cy.get('.card-title')
      .last()
      .contains(book.title)
      .get('.card-footer > .btn')
      .contains('Add to favorite')
      .click()
    cy.get('h4')
      .click()
})