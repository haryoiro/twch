require('dotenv').config()
const puppeteer = require('puppeteer')

const url = 'https://www.twitch.tv/'
const headless = false,
      args = [
        '--disable-infobars',
        '--incognito',
      ];

const userNameInput = '#login-username'
const loginButton = '/html/body/div[1]/div/div[1]/nav/div/div/button/div/div'
const passwordInput = '#password-input'
const loginSubmit = 'body > div.ReactModalPortal > div > div > div > div > div > div.tw-border-radius-medium.tw-flex.tw-overflow-hidden > div > div > div.tw-mg-b-1 > form > div > div:nth-child(3) > button'

async function openBrowser(channel) {
    console.log(process.env.TWITCH_USERNAME)
    const browser = await puppeteer.launch({ headless, args })
    const page = (await browser.pages())[0]
    await page.goto(url + channel)
    await (await page.$x(loginButton))[0].click();
    await page.waitForSelector(userNameInput);
    await page.type(userNameInput, 'dddopo')
    await page.type(passwordInput, 'Puruto638466')
    await page.click(loginSubmit)

    return page
}


module.exports = {
    openBrowser
}