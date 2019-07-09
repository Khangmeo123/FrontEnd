import { AboutPage } from './about.po';
import { browser } from 'protractor';

describe('About page tests', () => {
    let page : AboutPage;

    beforeEach(()=>{
    
        page = new AboutPage;
        page.navigateTo();
    });
    it('should display something',()=>{

        // show single 


        // page.getSingleShow().click()
        // browser.sleep(3000);
        // page.getdropdown1().click();
        // browser.sleep(3000);
        // page.getSingleShow().click();
        // page.getdropdown2().click();
        // browser.sleep(3000);
        // page.getdropdown3().click();
        // browser.sleep(3000);
        // page.getdropdown4().click();
        // browser.sleep(3000);
        // page.getdropdown5().click();
        browser.sleep(3000);
        

        // show editable 
        // page.getEditAbleShow().click();
        // browser.sleep(5000);
        // page.getdropdown4().click();
        // browser.sleep(5000);


        //show content with filters
        // page.getContentWithFilters().click();
        // browser.sleep(3000);
        // // page.getdropdown1().click();
        // // browser.sleep(3000);
        // page.getInputofContentFilters().sendKeys('a');
        // browser.sleep(5000);

        page.getGroup().click();
        browser.sleep(4000);
        page.getdropdown1().click();
        browser.sleep(5000);


    })

    
});