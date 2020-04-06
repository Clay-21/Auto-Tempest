let google = {}
module.exports = {
    beforeEach: browser => {
        google = browser.page.googlePage()
        google.navigate()
        browser.url('https://www.google.com/')
            .waitForElementPresent ('body')
    },
    after: browser => {
        google
            .end()
    },
    'Searching Google': browser => {
        var searchTerm = 'Cookie Monster'
        google
            .setValue('@searchBar', [searchTerm, browser.Keys.ENTER])
            .waitForElementPresent('@results')
            .verify.containsText('@results', searchTerm)

            

    }
}