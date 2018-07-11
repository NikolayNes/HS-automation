import {$, $$, ElementArrayFinder, ElementFinder} from "protractor";

export class AccountPage {
    accountBtn: ElementArrayFinder = $$("a[href='/account']");
}