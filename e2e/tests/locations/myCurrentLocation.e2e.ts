import {browser} from "protractor";
import {LocationsPage} from "../../pages/locationsPage.po";

describe("My current location", () => {
    let locationsPage = new LocationsPage();

    it("Use my current location. Search and compare my location", () => {

        browser.get(browser.params.locations_url);
        //locationsPage.myCurrentLocationBtn.click();
        //locationsPage.SearchLocationsInput.click();
        locationsPage.searchLocationsInput.clear();
        locationsPage.searchLocationsInput.sendKeys("New York");
        locationsPage.findStoresBtn.click();
        locationsPage.sliderBtn.click();
        //browser.actions().mouseMove(locationsPage.sliderBtn).mouseMove({x: 450, y: 0}).perform();
    });

});