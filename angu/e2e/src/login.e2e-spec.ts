import { LoginPage } from './login.po';
import { browser } from 'protractor';

describe('Login tests', () => {
    let page : LoginPage;

    beforeEach(()=>{
    
        page = new LoginPage;
        page.navigateTo();
        
    });

    it('login form should be valid',()=>{

        page.getNameTextBox().sendKeys('khangmeomeo');
        page.getPasswordTexBox().sendKeys('Khangmeo1');
        let form = page.getForm().getAttribute('class');
        expect(form).toContain('ng-valid');
    });



    // it('form login should be invalid',()=>{
    //     page.getNameTextBox().sendKeys('');
    //     page.getPasswordTexBox().sendKeys('');
    //     let form = page.getForm().getAttribute('class');
    //     expect(form).toContain('ng-invalid');
    // });

    // it('form login should go to homepage',()=>{
    //     page.getNameTextBox().sendKeys('test');
    //     page.getPasswordTexBox().sendKeys('test');
    //     page.getBtnSubmit().click();
    //     expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/home")
    // });
    
    // it('form login shout go to sign-up page',()=>{
    //     page.getBtnGoSignUp().click();
    //     expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/sign-up")
    // });
    
    it('form input name should be invalid',()=>{
        page.getNameTextBox().sendKeys('');
        page.getBtnSubmit().click();
        var error = page.getErrorName().getText();
        expect(error).toEqual('null is short than 8 character');
        // let form = page.getForm().getAttribute('class');
    })

    it('form input password should be invalid',()=>{
        page.getPasswordTexBox().sendKeys('');
        page.getBtnSubmit().click();
        var error = page.getErrorPassword().getText();
        expect(error).toEqual('null is not a valid password, valid password need at lest 1 uppercase, 1 lowercase and 1 number');
    })

        

});