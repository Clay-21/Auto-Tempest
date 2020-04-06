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
'Test 1': browser => {
    var weather = (weatherData) => {
        browser 
            .setValue('.enter-location__input', weatherData.search)
            .click('button')
            .verify.containsText('.current-weather__location', weatherData.result)
                .click('button')
    }
    weather({search: '84414', result: 'Ogden'})
    weather({search: 'Hurricane', result: 'Hurricane'})
    weather({search: '84770', result: 'Saint George'})
    weather({search: '84745', result: 'La Verkin'})
    weather({search: '84050', result: 'Morgan'})
    weather({search: 'Huntsville', result: 'Huntsville'})
    weather({search: '84075', result: 'Syracuse'})
    weather({search: '84067', result: 'Roy'})
}
}
