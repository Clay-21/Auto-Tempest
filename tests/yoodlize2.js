module.exports = {
    beforeEach: browser => {
        browser
            .url('https://alpha.yoodlize.com/')
            .waitForElementPresent('body')
    },
    after: browser => {
        browser 
            .end()
    },
    'My Test': browser => {
        var clickSeeAll = (number) => {
            browser
            .useXpath()
            .click('//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[${number}]')
            .useCss()
        }
    }
}