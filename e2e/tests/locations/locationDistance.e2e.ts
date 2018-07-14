import {browser} from "protractor";
import {LocationsPage} from "../../pages/locationsPage.po";
import set = Reflect.set;

describe("Go to location page. Search locations and compare current location", () => {
    let locationsPage = new LocationsPage();
    let EC = browser.ExpectedConditions;

    it("Go to location page. Search locations", () => {
        locationsPage.navigateToLocationPage();
        locationsPage.searchLocationsInput.clear();
        locationsPage.searchLocationsInput.sendKeys("New York");
        locationsPage.listOfResult.first().click();
    });
    it ("Select Spa. Checking distance", () => {

    });

});