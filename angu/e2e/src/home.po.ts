import { browser, by, element, Ptor } from 'protractor';

export class HomePage {
    navigateTo() {
        return browser.get('/home')
    }

    getTitleText() {
        return element(by.css('app-home h5')).getText();
    }
    
    getSelectBox(){
        return element(by.id('selectBox'));
    }
    getBirthday() {
        return element(by.id('bday'));
    }
    getRadio1CheckBox() {
        return element(by.id('1'));
    }
    getRadio2CheckBox() {
        return element(by.id('2'));
    }
    getRadio3CheckBox() {
        return element(by.id('3'));
    }
    getOption1(){
        return element(by.css('select option[value="1"]'));
    }
    getOption2(){
        return element(by.css('select option[value="2"]'));
    }
    getOption3(){
        return element(by.css('select option[value="3"]'));
    }
    getOption4(){
        return element(by.css('select option[value="4"]'));
    }
    getBtnClick(){
        return element(by.name('submit'));
    }
    getForm(){
        return element(by.css('#homeForm'));
      }

}