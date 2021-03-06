/// <reference types="cypress" />

import LoginPage from '../pages/LoginPage'
import HeaderPage from '../pages/HeaderPage'

describe('Billionthing Login Test', function()  {

  it('Login with invalid Username valid Password', function()  {

    const loginpage = new LoginPage()
    const headerpage = new HeaderPage()
    const faker = require('faker')
    cy
    .fixture('login')
    .then( testinvaliduser => {

    headerpage.visit()
    headerpage.signinHeader()
    loginpage.fillUsername(faker.name.firstName())
    loginpage.fillPassword(testinvaliduser.ValidPassword)
    loginpage.login()
    cy.get('.alert').should('contain',testinvaliduser.InvalidMessage)
    })

  })

  it('Login with valid Username invalid Password', function()  {

    const loginpage = new LoginPage()
    const headerpage = new HeaderPage()
    cy
    .fixture('login')
    .then( testinvalidpw => {

    headerpage.visit()
    headerpage.signinHeader()
    loginpage.fillUsername(testinvalidpw.ValidUsername)
    loginpage.fillPassword(testinvalidpw.InvalidPassword)
    loginpage.login()
    cy.get('.alert').should('contain',testinvalidpw.InvalidMessage)
    })

  })

  it('Login with invalid Username invalid Password', function()  {

    const loginpage = new LoginPage()
    const headerpage = new HeaderPage()
    cy
    .fixture('login')
    .then( testinvaliddata => {

    headerpage.visit()
    headerpage.signinHeader()
    loginpage.fillUsername(testinvaliddata.InvalidUsername)
    loginpage.fillPassword(testinvaliddata.InvalidPassword)
    loginpage.login()
    cy.get('.alert').should('contain',testinvaliddata.InvalidMessage)
  })

})

  it('Login with valid Username valid Password', function()  {

    const loginpage = new LoginPage()
    const headerpage = new HeaderPage()
    cy
    .fixture('login')
    .then( testvaliddata => {

    headerpage.visit()
    headerpage.signinHeader()
    loginpage.fillUsername(testvaliddata.ValidUsername)
    loginpage.fillPassword(testvaliddata.ValidPassword)
    loginpage.login()
    cy.get('.content > :nth-child(2)').should('contain', testvaliddata.SuccessTitle)
    })

  })

})