var elements = require('./elements');

class HomePage {

  clickOnSignInOption(){
    return cy.get(elements.HOMEPAGE.SIGN_IN_LINK).click()
  }
}

export default HomePage;
