
export class HomePage {
  navigate() {
    cy.visit('https://www.bunnings.com.au/')
 }

clickSearchTextInput() {
  cy.get('#header-search').click({ force: true });
}

 enterSearchText(searchText) {
   cy.get('#custom-css-outlined-input').type(searchText , { force: true })
}

clickSearchIcon() {
  cy.get('#crossIcon').click({ force: true });
}

verifySearchItemDisplayed() {
  cy.get('.searchTerm').contains('hammer')
}

addItemToCart() {
  cy.get('[data-locator="atcButton"]').eq(0).scrollIntoView()
  cy.get('[data-locator="atcButton"]').eq(0).click({ force: true })
}

verifyReviewCheckoutButtonDisplayed() {
  cy.get('.MuiButton-label').eq(0).contains('Review & checkout')
 }

 clickReviewCheckOutButton() {
   cy.get('.MuiButton-label').eq(0).click()
 }

 verifyProductName () {
  cy.get('.ProductName ').contains('Craftright 8oz/ 226g Steel Claw Hammer')
 }

}