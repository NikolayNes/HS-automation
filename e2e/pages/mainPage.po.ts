import { $, $$, browser, ElementArrayFinder, ElementFinder } from "protractor";

export class MainPage {
    singInBtn: ElementFinder = $("a[href='/account']");
    signInPopUp: ElementFinder = $(".frame");
    emailInputSignInPopUp: ElementFinder = $("#sign-in-popup-email");
    passInputSignInPopUp: ElementFinder = $("#sign-in-popup-password");
    submitBtn: ElementFinder = $("input[value='Sign in']");
    errroEmailMessage:ElementArrayFinder = $$("div.note");
    errroPassMessage:ElementArrayFinder = $$("div.note");

    successSignIn () {
        browser.get(browser.params.base_url);
        this.singInBtn.click();
        this.emailInputSignInPopUp.sendKeys(browser.params.user_email);
        this.passInputSignInPopUp.sendKeys(browser.params.user_pass);
        browser.sleep(1000);
        this.submitBtn.click();
    };
    failSignIn () {
        browser.get(browser.params.base_url);
        this.singInBtn.click();
        this.emailInputSignInPopUp.sendKeys(browser.params.wrong_email);
        this.passInputSignInPopUp.sendKeys(browser.params.wrong_pass);
        browser.sleep(1000);
        this.submitBtn.click();
    };
};