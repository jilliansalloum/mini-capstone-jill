import {BasePage} from './basePage'
import {By} from 'selenium-webdriver'
  
  // this is standard "boilerplate" code.

export class Clicker extends BasePage {
//Locators Here
oatmealRaisinClicker: By = By.xpath('//a[@class="cc_btn cc_btn_accept_all"]')
cursorPhoto: By = By.xpath('//div[@class="product unlocked enabled"]')
englishBtn: By = By.xpath('//div[@id="langSelect-EN"]')
fingerUp: By = By.xpath('//div[@id="upgrade0"]')
cookieButton: By = By.css('#bigCookie')
wakeBake: By = By.xpath('//div[@id="note-2"]')
closeWB: By = By.xpath('//div[@class="close"][1]')
optionsBtn: By = By.xpath('//div[@class="subButton"]')
changeLang: By = By.xpath('//a[@id="changeLanguageOption"]')
constructor() {
super({url: 'https://orteil.dashnet.org/cookieclicker/'})
}
//methods
async clickCookie(num, clickThing ) {
    for (let i = 0; i < num; i++ ){
        await this.click(this.cookieButton)
    }   
}
}
