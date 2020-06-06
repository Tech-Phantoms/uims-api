const puppeteer = require('puppeteer')
const {
    AUTHENTICATE_URL,
} = require('../constants/endpoints')

const login = async ({uid,password}) => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto(AUTHENTICATE_URL)

    await page.type('input#txtUserId', uid)

    

    const [response] = await Promise.all([
        page.waitForNavigation(),
        page.click('input#btnNext')
    ])

    let uidCookie = await page.cookies()

    await page.type('input#txtLoginPassword', password)


    const [passRes] = await Promise.all([
        page.waitForNavigation(),
        page.click('input#btnLogin'),
    ])


    //await page.screenshot({path: 'example.png'})

    await browser.close();


    return passRes._url

    
}

module.exports = login