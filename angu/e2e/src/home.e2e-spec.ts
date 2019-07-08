import { HomePage } from './home.po';
import { browser,by, logging, element } from 'protractor';

describe('home page test select boxes, radios check, date picker by sendkey', () => {
    let page: HomePage;

    beforeEach(() => {
        page = new HomePage();
    });

    it('should display title homepage', () => {
        page.navigateTo();
        expect(page.getTitleText()).toEqual('HOME PAGE');
    });

    
   
    it('form home should be valid', () => {
        page.getOption1().click();
        page.getRadio1CheckBox().click();
        page.getBirthday().sendKeys('11231999');
        let form = page.getForm().getAttribute('class');
        expect(form).toContain('ng-valid');
    });
    it('form home should be valid', () => {
        page.getOption2().click();
        page.getRadio1CheckBox().click();
        page.getBirthday().sendKeys('11231999');
        let form = page.getForm().getAttribute('class');
        expect(form).toContain('ng-valid');
    });
    it('form home should be valid', () => {
        page.getOption3().click();
        page.getRadio1CheckBox().click();
        page.getBirthday().sendKeys('11231999');
        let form = page.getForm().getAttribute('class');
        expect(form).toContain('ng-valid');
    });
    it('form home should be valid', () => {
        page.getOption4().click();
        page.getRadio1CheckBox().click();
        page.getBirthday().sendKeys('11231999');
        let form = page.getForm().getAttribute('class');
        expect(form).toContain('ng-valid');
    });
    it('form home should be valid', () => {
        page.getOption1().click();
        page.getRadio2CheckBox().click();
        page.getBirthday().sendKeys('11231999');
        let form = page.getForm().getAttribute('class');
        expect(form).toContain('ng-valid');
    });
    it('form home should be valid', () => {
        page.getOption1().click();
        page.getRadio2CheckBox().click();
        page.getBirthday().sendKeys('11231999');
        let form = page.getForm().getAttribute('class');
        expect(form).toContain('ng-valid');
    });
    it('form home should be valid', () => {
        page.getOption1().click();
        page.getRadio2CheckBox().click();
        page.getBirthday().sendKeys('11231999');
        let form = page.getForm().getAttribute('class');
        expect(form).toContain('ng-valid');
    });
    it('form home should be valid', () => {
        page.getOption1().click();
        page.getRadio2CheckBox().click();
        page.getBirthday().sendKeys('11231999');
        let form = page.getForm().getAttribute('class');
        expect(form).toContain('ng-valid');
    });
    it('form home should be valid', () => {
        page.getOption1().click();
        page.getRadio3CheckBox().click();
        page.getBirthday().sendKeys('11231999');
        let form = page.getForm().getAttribute('class');
        expect(form).toContain('ng-valid');
    });
    it('form home should be valid', () => {
        page.getOption1().click();
        page.getRadio3CheckBox().click();
        page.getBirthday().sendKeys('11231999');
        let form = page.getForm().getAttribute('class');
        expect(form).toContain('ng-valid');
    });
    it('form home should be valid', () => {
        page.getOption1().click();
        page.getRadio3CheckBox().click();
        page.getBirthday().sendKeys('11231999');
        let form = page.getForm().getAttribute('class');
        expect(form).toContain('ng-valid');
    });
    it('form home should be valid', () => {
        page.getOption1().click();
        page.getRadio3CheckBox().click();
        page.getBirthday().sendKeys('11231999');
        let form = page.getForm().getAttribute('class');
        expect(form).toContain('ng-valid');
    });
    // should be invalid
    it('form home should be invalid yoyoyoyo', () => {
        page.navigateTo();
        page.getOption1().click();
        // page.getRadio1CheckBox().clear();
        // page.getRadio2CheckBox().clear();
        // page.getRadio3CheckBox().clear();
        browser.sleep(2000);
        page.getBirthday().sendKeys('11231999');
        browser.sleep(2000);
        let form = page.getForm().getAttribute('class');
        expect(form).toContain('ng-invalid');
    });
    it('form //////////////////home should be invalid', () => {
        page.getOption2().click();
        page.getBirthday().sendKeys('11231999');
        let form = page.getForm().getAttribute('class');
        expect(form).toContain('ng-invalid');
    });
    // it('form home should be invalid', () => {
    //     page.getOption3().click();
    //     page.getBirthday().sendKeys('11231999');
    //     let form = page.getForm().getAttribute('class');
    //     expect(form).toContain('ng-invalid');
    // });
    // it('form home should be invalid', () => {
    //     page.getOption4().click();
    //     page.getBirthday().sendKeys('11231999');
    //     let form = page.getForm().getAttribute('class');
    //     expect(form).toContain('ng-invalid');
    // });
    // it('form home should be invalid', () => {
    //     page.navigateTo();
    //     page.getRadio1CheckBox().click();
    //     page.getBirthday().sendKeys('11231999');
    //     let form = page.getForm().getAttribute('class');
    //     expect(form).toContain('ng-invalid');
    // });
    // it('form home should be invalid', () => {
    //     page.getRadio2CheckBox().click();
    //     page.getBirthday().sendKeys('11231999');
    //     let form = page.getForm().getAttribute('class');
    //     expect(form).toContain('ng-invalid');
    // });
    // it('form home should be invalid', () => {
    //     page.getRadio3CheckBox().click();
    //     page.getBirthday().sendKeys('11231999');
    //     let form = page.getForm().getAttribute('class');
    //     expect(form).toContain('ng-invalid');
    // });
    
    // // 1-2
    // it('form home should be invalid /// input date clear', () => {
    //     page.navigateTo();
    //     page.getOption1().click();
    //     page.getRadio1CheckBox().click();
    //     browser.sleep(3000);
    //     let form = page.getForm().getAttribute('class');
    //     expect(form).toContain('ng-invalid');
    // });
    // it('form home should be invalid', () => {
    //     page.getOption2().click();
    //     page.getRadio1CheckBox().click();
        
    //     let form = page.getForm().getAttribute('class');
    //     expect(form).toContain('ng-invalid');
    // });
    // it('form home should be invalid', () => {
    //     page.getOption3().click();
    //     page.getRadio1CheckBox().click();
        
    //     let form = page.getForm().getAttribute('class');
    //     expect(form).toContain('ng-invalid');
    // });
    // it('form home should be invalid', () => {
    //     page.getOption4().click();
    //     page.getRadio1CheckBox().click();
        
    //     let form = page.getForm().getAttribute('class');
    //     expect(form).toContain('ng-invalid');
    // });

    // it('form home should be invalid', () => {
    //     page.getOption1().click();
    //     page.getRadio2CheckBox().click();
        
    //     let form = page.getForm().getAttribute('class');
    //     expect(form).toContain('ng-invalid');
    // });
    // it('form home should be invalid', () => {
    //     page.getOption2().click();
    //     page.getRadio2CheckBox().click();
        
    //     let form = page.getForm().getAttribute('class');
    //     expect(form).toContain('ng-invalid');
    // });
    // it('form home should be invalid', () => {
    //     page.getOption3().click();
    //     page.getRadio2CheckBox().click();
        
    //     let form = page.getForm().getAttribute('class');
    //     expect(form).toContain('ng-invalid');
    // });
    // it('form home should be invalid', () => {
    //     page.getOption4().click();
    //     page.getRadio2CheckBox().click();
        
    //     let form = page.getForm().getAttribute('class');
    //     expect(form).toContain('ng-invalid');
    // });

    // it('form home should be invalid', () => {
    //     page.getOption1().click();
    //     page.getRadio3CheckBox().click();
        
    //     let form = page.getForm().getAttribute('class');
    //     expect(form).toContain('ng-invalid');
    // });
    // it('form home should be invalid', () => {
    //     page.getOption2().click();
    //     page.getRadio3CheckBox().click();
        
    //     let form = page.getForm().getAttribute('class');
    //     expect(form).toContain('ng-invalid');
    // });
    // it('form home should be invalid', () => {
    //     page.getOption3().click();
    //     page.getRadio3CheckBox().click();
        
    //     let form = page.getForm().getAttribute('class');
    //     expect(form).toContain('ng-invalid');
    // });
    // it('form home should be invalid', () => {
    //     page.getOption4().click();
    //     page.getRadio3CheckBox().click();
        
    //     let form = page.getForm().getAttribute('class');
    //     expect(form).toContain('ng-invalid');
    // });

    // it('form home should be invalid bc no field filted',()=>{   
    //     let form = page.getForm().getAttribute('class');
    //     expect(form).toContain('ng-invalid');
    // })



})
