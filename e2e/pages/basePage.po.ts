import { browser } from 'protractor';

export class BasePage {
    goToHomePage () {
        browser.get('/');
    }
}