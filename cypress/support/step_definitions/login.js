import LoginPage from '../pages/LoginPage/LoginPage.js';

const loginPage = new LoginPage();

And ('I provide a {string} email', (option) => {
  if (option == "valid"){
      loginPage.typeInEmail("dorisn172@gmail.com");
  }
});

Then ('I provide a {string} password', (option) => {
  switch (option){
    case "valid":
      loginPage.typeInPassword("123123red");
      break;
    case "invalid":
      loginPage.typeInPassword("12341234rd");
      break;
  }
});

And ('I tap on the Sign In button', () => {
  loginPage.clickOnSignInBtn();
});

Then ('the home screen is displayed', () => {

});
