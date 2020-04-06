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
    'Arrays 1': browser => {  
    var myData = [ 
    {search: '84601', result: 'Provo'}, 
    {search: 'San Francisco', result: 'San Francisco'},
    {search: 'London', result: 'London'} 
 ]   
    },
    'Test 1': browser => {
        var weather = (weatherData) => {
            browser 
                .setValue('.enter-location__input', weatherData.search)
                .click('button')
                .verify.containsText('.current-weather__location', weatherData.result)
                    .click('button')
    }
    weather(myData[0])
}
}