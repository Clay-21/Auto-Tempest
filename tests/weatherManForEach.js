var checkValidSearch = (driver, weatherData) => {
    driver
        .waitForElementVisible('.enter-location__input')
        .setValue('.enter-location__input', weatherData.search)
        .click('button')
        .getText('.current-weather__location', function (result) {
            driver  
                .verify.ok(result.value === weatherData.result, weatherData.result)
        })
        .waitForElementVisible('.current-weather__location')
        .verify.containsText('.current-weather__location', weatherData.result)
        .click('button')
}

module.exports = {
    beforeEach: browser => {
        browser 
            .url('https://devmountain-qa.github.io/weatherman/build/index.html')
            .waitForElementPresent('body')
    },
    after: browser => {
        browser 
            .end()
    },
    'Weather Locations': browser => {
        var validData = [
            { search: '84737', result: 'Hurricane'},
            { search: 'Pleasant View', result: 'Pleasant View'},
            { search: '84075', result: 'Syracuse'},
            { search: '84404', result: 'Ogden'},
            { search: 'Saint George', result: 'Saint George'}
        ]
        // var invalidData = [
        //     { search: ''}
        //]
        validData.forEach(city => {
            checkValidSearch(browser, city)
        })
    }
}