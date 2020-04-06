module.exports = {
    beforeEach: browser => {
        browser
            .url('https://www.google.com/')
            .waitForElementPresent ('body')
            .maximizeWindow()
    },
    after: browser => {
        browser
            .end()
    },
    'Searching Google' : browser => {
        browser
            .setValue('input[name="q"]', ['Cookie Monster', browser.Keys.ENTER])
            .waitForElementVisible('#res')
            .verify.containsText('#res', 'Cookie Monster')
    },
    'Searching McLaren 720S' : browser => {
        browser
        .setValue('input[name="q"]', ['McLaren 720S', browser.Keys.ENTER])
        .expect.element('input[name="q"]').value.to.equal('McLaren 720S')
    }
}