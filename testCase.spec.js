/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

import { HomePage } from "../../page-objects/home-page";


describe('Given User is om Homepage When they search an item Then Add the Item in Cart And Review and Checkout the Item', () => {
  const homePage = new HomePage

  beforeEach(() => {
    cy.visit('https://www.bunnings.com.au/')
  })

  it('Enter search text into search box and click on search icon on site to add item to cart', () => {
    homePage.navigate()
    homePage.clickSearchTextInput();
    homePage.enterSearchText('hammer');
    homePage.clickSearchIcon();
    homePage.verifySearchItemDisplayed()
    homePage.addItemToCart();
    homePage.verifyReviewCheckoutButtonDisplayed();
    homePage.clickReviewCheckOutButton();
    homePage.verifyProductName();
  });
});