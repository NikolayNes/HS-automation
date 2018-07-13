import { browser } from 'protractor';

export class BasePage {
    navigateToHomePage () {
        browser.get('/');
    };
    waitLoadingElementsOnPages () {
        browser.sleep(2000);
    }
}