import { browser, by, element } from 'protractor';

export class LoginPage {
  navigateTo() {
    return browser.get('/login')
  }

  getNameTextBox(){
      return element(by.name('name'));
  }
  getPasswordTexBox(){
    return element(by.name('password'));
  }
  getForm(){
    return element(by.css('#loginForm'));
  }
  getBtnSubmit(){
    return element(by.css('#btnSubmit'));
  }
  getBtnGoSignUp(){
    return element(by.css('#btnGoSignUp'));
  }
  // getFormControlName(){
  //   return element(by.name('name'));
  // }
  getErrorName(){
    return element(by.css("[data-qe-id='errorName']"));
  }

  getErrorPassword(){
    return element(by.css("[data-qe-id = 'errorPassword']"));
  }
}