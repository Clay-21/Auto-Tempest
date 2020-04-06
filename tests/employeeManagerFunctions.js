
/**
 * Clicks an element whose text equals the `text` parameter - element must have a unique text value.
 * @param {object} browser - `browser`/`client` in use
 * @param {string} text - the text of the element that should be clicked
 */
var clickByText = (browser, text) => {
    browser
        .useXpath()
        .click(`//*[text()="${text}"]`)
        .useCss()
}
module.exports = {
    before: browser => {
        browser.url('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')
            .waitForElementPresent('body')
    },
    after: browser => {
        browser.end()
    },
    'Ron Swanson': browser => {
        clickByText = (browser, text)
    }
    
    
}