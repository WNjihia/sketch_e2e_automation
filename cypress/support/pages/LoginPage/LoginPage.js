var elements = require('./elements');

class LoginPage {

  typeInEmail(text){
    return cy.get(elements.LOGINPAGE.EMAIL_INPUT, { timeout: 5000 }).clear().type(text);
  }

  typeInPassword(text){
    return cy.get(elements.LOGINPAGE.PASSWORD_INPUT).clear().type(text);
  }

  clickOnSignInBtn(){
    return cy.get(elements.LOGINPAGE.SIGN_IN_BTN).click();
  }
}

export default LoginPage;
