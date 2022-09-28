import {BasePage} from './basePage'
import {
    Builder,
    By,
    Capabilities,
    until,
    WebDriver,
    WebElement,
  } from "selenium-webdriver";
  
  // this is standard "boilerplate" code.
  const driver: WebDriver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();


export class Clicker extends BasePage {
//Locators Here
    url: string = 'https://orteil.dashnet.org/cookieclicker/'
    cookieButton: By = By.id('bigCookie')
constructor() {
super({url: 'https://orteil.dashnet.org/cookieclicker/'})
}
//methods
async clickCookie() {
    await this.driver.get(this.url)
    await this.driver.wait(until.elementLocated(this.cookieButton))
}
}