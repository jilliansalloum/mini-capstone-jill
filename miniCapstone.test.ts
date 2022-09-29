import {Builder, By, Capabilities, WebDriver, until} from 'selenium-webdriver'
import { Server } from 'selenium-webdriver/safari'
import { Clicker } from './miniPageObjects'

const myClick = new Clicker()

jest.setTimeout(60000)

test('click cookie and see count increase by 1', async () => {
    await myClick.navigate()
    await myClick.click(myClick.englishBtn)
    await myClick.click(myClick.cookieButton)
    let value = await myClick.driver.getCurrentUrl()
    expect(value).toBe(myClick.url)
})

test('buy a pointer', async () => {
    await myClick.clickCookie(15, myClick.cookieButton)
    await myClick.driver.sleep(5000)
    await myClick.click(myClick.oatmealRaisinClicker)
    await myClick.getElement(myClick.cursorPhoto)
    await myClick.click(myClick.cursorPhoto)
    let value = await myClick.driver.findElement(By.id('productOwned0')).getText()
    expect(value).toContain('1')
})

test('buy an index finger', async () => {
    await myClick.clickCookie(100, myClick.cookieButton)
    await myClick.driver.sleep(500)
    await myClick.getElement(myClick.fingerUp)
    await myClick.click(myClick.fingerUp)
    let value = await myClick.driver.findElement(myClick.fingerUp).isDisplayed()
    expect(value).toBeTruthy()
})

test('exit wake and bake achievement', async () => {
    await myClick.driver.sleep(500)
    await myClick.getElement(myClick.wakeBake)
    await myClick.click(myClick.closeWB)
    await myClick.driver.sleep(500)
    let value = await myClick.driver.findElement(myClick.wakeBake).isDisplayed()
    expect(value).toBeTruthy()
})

test('change language', async () => {
    await myClick.getElement(myClick.optionsBtn)
    await myClick.click(myClick.optionsBtn)
    await myClick.driver.sleep(1000)
    await myClick.click(myClick.changeLang)
    await myClick.driver.findElement(By.id('langSelect-FR')).click()
    await myClick.driver.sleep(2000)
    let value = await myClick.driver.findElement(By.id('storeTitle')).getText()
    expect(value).toContain('Boutique')
})

afterAll(async () => {
    await myClick.driver.quit()
})