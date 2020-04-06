
var mathMethods = {
    add: function (num1, num2) {
        return num1 + num2
    },
    subtract: function (num1, num2) {
        return num1 - num2
    },
    divide: function (num1, num2) {
        return num1 / num2
    },
    multipy: function (num1, num2) {
        return num1 * num2
    }
}

module.exports = {
    beforeEach: browser => {
        browser.url('http://www.google.com')
    },
    'check addition': browser => {
        browser
            .setValue('input[type="text"]', ['1+2', browser.Keys.ENTER])
            .waitForElementPresent('#cwos', 2000)
            .expect.element('#cwos').text.to.contain(mathMethods.add(1, 2))
    },
    'check subtraction': browser => {
        browser
            .setValue('input[type="text"]', ['32-5', browser.Keys.ENTER])
            .waitForElementPresent('#cwos', 2000)
            .expect.element('#cwos').text.to.contain(mathMethods.subtract(32, 5))
    },
    'check division': browser => {
        browser
            .setValue('input[type="text"]', ['2202.76/4', browser.Keys.ENTER])
            .waitForElementPresent('#cwos', 2000)
            .expect.element('#cwos').text.to.contain(mathMethods.divide(2202.76, 4))
            .pause(5000)
    },
    'check multiplication': browser => {
        browser
            .setValue('input[type="text"]', ['2345.3333*2', browser.Keys.ENTER])
            .waitForElementPresent('#cwos', 2000)
            .expect.element('#cwos').text.to.contain(mathMethods.multipy(2345.3333, 2))
    },
    after: browser => browser.end()
}