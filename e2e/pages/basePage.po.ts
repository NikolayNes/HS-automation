import { browser } from 'protractor';

export class BasePage {
    goToHomePage () {
        browser.get('/');
    };
    waitLoadingElementsOnPages () {
        browser.sleep(2000);
    }
}