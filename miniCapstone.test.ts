import {Builder, By, Capabilities, WebDriver, until} from 'selenium-webdriver'
import { Clicker } from './miniPageObjects'

const myClick = new Clicker

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()
jest.setTimeout(1000000)


test('click cookie and see count increase by 1', async () => {
    await driver.get(myClick.url)
    await driver.wait(until.elementLocated(By.id('langSelect-EN'))).click()
    await driver.wait(until.elementLocated(By.id('bigCookie'))).click()
    await driver.manage().setTimeouts( { implicit: 2000 } );
    let value = await driver.getCurrentUrl()
    expect(value).toBe(myClick.url)
});

test('buy a pointer', async () => {
    await driver.findElement(By.id('bigCookie')).click()
    await driver.findElement(By.id('bigCookie')).click()
    await driver.findElement(By.id('bigCookie')).click()
    await driver.findElement(By.id('bigCookie')).click()
    await driver.findElement(By.id('bigCookie')).click()
    await driver.findElement(By.id('bigCookie')).click()
    await driver.findElement(By.id('bigCookie')).click()
    await driver.findElement(By.id('bigCookie')).click()
    await driver.findElement(By.id('bigCookie')).click()
    await driver.findElement(By.id('bigCookie')).click()
    await driver.findElement(By.id('bigCookie')).click()
    await driver.findElement(By.id('bigCookie')).click()
    await driver.findElement(By.id('bigCookie')).click()
    await driver.findElement(By.id('bigCookie')).click()
    await driver.findElement(By.id('bigCookie')).click()
    await driver.manage().setTimeouts( { implicit: 2000 } );
    await driver.wait(until.elementLocated(By.id('productName0'))).click()
    let value = await driver.findElement(By.id('productOwned0')).getText()
    expect(value).toContain('1')
})