import {browser} from "protractor";
import {LocationsPage} from "../../pages/locationsPage.po";
import set = Reflect.set;

describe("", () => {
    let locationsPage = new LocationsPage();
    let EC = browser.ExpectedConditions;

    fit("Compare distance", () => {

        locationsPage.navigateToLocationPage();
        //browser.actions().mouseMove(locationsPage.sliderBtn).mouseMove({x: -158, y: 0}).doubleClick().perform();
        locationsPage.searchLocationsInput.clear();
        locationsPage.searchLocationsInput.sendKeys("New York");
        browser.wait(EC.visibilityOf(locationsPage.listOfResult.first()), 2000);
        locationsPage.listOfResult.first().click();
        //browser.actions().mouseMove(locationsPage.sliderBtn).mouseMove({x: 400, y: 0}).perform();
        browser.actions().mouseMove(locationsPage.sliderBtn).mouseMove({x: 470, y: 0}).doubleClick().perform();
        locationsPage.findStoresBtn.click();
        locationsPage.pickFromMap.click();
        browser.sleep(2000);
        //browser.actions().mouseMove(locationsPage.sliderBtn).mouseMove({x: 470, y: 0}).doubleClick().perform();
    });
});