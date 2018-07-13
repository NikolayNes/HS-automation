import {$, $$, browser, ElementArrayFinder, ElementFinder} from "protractor";
import {setConstantValue} from "typescript";

export class LocationsPage {
    myCurrentLocationBtn: ElementFinder = $("a[href='#']");
    searchLocationsInput: ElementFinder = $("input[id='search-locations-address']");
    findStoresBtn: ElementFinder = $("input[value='Find Stores']");
    sliderBtn: ElementFinder = $(".ui-slider-handle.ui-corner-all.ui-state-default");
    listOfResult: ElementArrayFinder = $$(".ui-menu-item");
    pickFromMap: ElementFinder = $("icon-map_view");




    navigateToLocationPage () {
        browser.get(browser.params.locations_url);
    };

    navigateAndTypeData () {
        this.navigateToLocationPage();
        this.sliderBtn.setAttribute("aria-valuenow", 0);
        browser.actions().mouseMove(this.sliderBtn).click().mouseMove({x: 0, y: 0}).perform();
        this.searchLocationsInput.clear();
        this.searchLocationsInput.sendKeys("New York");
    }
}