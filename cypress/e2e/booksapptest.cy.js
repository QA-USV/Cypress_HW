/* eslint-disable no-undef */

const { beforeEach } = require("mocha")

const user = {
  email: 'test@test.com', 
  password: 'test'
}

const wrongUser = {
  email: 'hacker@hacker.com', 
  password: 'hackIt'
}

const book = {
  title: 'English Idioms',
  description:'English dictionary',
  authors:'Collins'
}

describe('Books list app tests, login steps', () => {
  beforeEach (() => {
    cy.visit('/')
    cy.viewport('iphone-xr')
  })

  it('opens a start web page first', () => {
    cy.contains('Books list')
  })

  it('should not login with wrong email', () => {
    cy.login(wrongUser.email, user.password)
    cy.get('.mb-3')
      .contains('Неправильая почта или пароль')
  })

  it('should not login with wrong password', () => {
    cy.login(user.email, wrongUser.password)
    cy.get('.mb-3')
      .contains('Неправильая почта или пароль')
  })

  it('should successfully logins', () => {
    cy.login(user.email, user.password)
    cy.contains(`Добро пожаловать ${user.email}`)
      .should('be.visible')
  })
})

describe('Books list app tests, books manipulations', () => {
  beforeEach (() => {
    cy.visit('/')
    cy.viewport('macbook-15')
    cy.login(user.email, user.password)
    cy.addNewBook(book)
  })
  
  it('should add new book', () => {
    cy.get('.card-body > .card-title')
      .contains(book.title)
  })

  it('should add a book to favorites', () => {
    cy.addBookToFavorites(book)
  })
  
  it('should delete a book from favorites', () => {
    cy.addBookToFavorites(book)      
    cy.get('.card-title')
      .contains(book.title)
    cy.get('.card-footer > .btn')
      .contains('Delete from favorite')
      .click()
    cy.contains('.card-title', book.title)
      .should('not.exist')
  })
  
  it('book should be available for downloading from "favorites" page', () => {
    cy.addBookToFavorites(book)
    cy.get('.card-title')
      .contains(book.title)
      .click()
      .get('.col-md-7 > .btn')
      .contains('Dowload book')
      .should('not.be.disabled')
  })
})