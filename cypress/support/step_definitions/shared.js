import HomePage from '../pages/HomePage/HomePage.js';

const url = 'https://www.sketch.com'
const homePage = new HomePage();

Given('I navigate to the HomePage', () => {
  cy.visit(url)
});

When ('I decide to {string}', (option) => {
  if (option == "sign in"){
    homePage.clickOnSignInOption();
  }
});
