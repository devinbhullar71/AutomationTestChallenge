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

  it('Enter text into search box and click on search icon', () => {
    homePage.navigate()
    homePage.clickSearchTextInput();
    homePage.enterSearchText('hammer');
    homePage.clickSearchIcon();
  });

  it('Identify the first item displayed into the search results and add an item into the cart by clicking on to Add to cart icon button', () => {
    homePage.navigate()
    homePage.clickSearchTextInput();
    homePage.enterSearchText('hammer');
    homePage.clickSearchIcon();
    homePage.verifySearchItemDisplayed('hammer')
    homePage.addItemToCart();
  });

  it('Once an item added Review and checkout button is displayed on the screen', () => {
    homePage.navigate()
    homePage.clickSearchTextInput();
    homePage.enterSearchText('hammer');
    homePage.clickSearchIcon();
    homePage.verifySearchItemDisplayed('hammer')
    homePage.addItemToCart();
    homePage.verifyReviewCheckoutButtonDisplayed();
  });
});