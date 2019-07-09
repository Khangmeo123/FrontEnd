import { browser, by, element } from 'protractor';

export class AboutPage {
  navigateTo() {
    return browser.get('/about')
  }
    
    getSingleShow(){
        return element(by.css("[data-qe-id='dropdown1']"));
    }
    getdropdown1(){
        return element.all(by.tagName('p-dropdownitem')).get(0);
    }
    getdropdown2(){
        return element.all(by.tagName('p-dropdownitem')).get(1);
    }
    getdropdown3(){
        return element.all(by.tagName('p-dropdownitem')).get(2);
    }
    getdropdown4(){
        return element.all(by.tagName('p-dropdownitem')).get(3);
    }
    getdropdown5(){
        return element.all(by.tagName('p-dropdownitem')).get(4);
    }

    getEditAbleShow(){
        // sửa lại trong p-dropdown data-qe-id thành id
        return element(by.xpath('//p-dropdown[@data-qe-id="dropdown2"]/div/div/span'));
    }
    
    getContentWithFilters(){
        return element(by.xpath('//p-dropdown[@data-qe-id="dropdown3"]'));
    }
    getInputofContentFilters(){
        return element(by.xpath('//p-dropdown[@data-qe-id="dropdown3"]/div/div/div/input'));
    }

    getGroup(){
        return element(by.xpath('//p-dropdown[@data-qe-id="dropdown4"]'));
    }
}