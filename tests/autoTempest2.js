'Searching AutoTempest': browser => {
    var searchMake = 'Toyota'
    var searchModel = 'Tacoma'
    var searchZipCode = '84414'
    var searchWithin = '50'
auto
    .pause(2000)
    .setValue('@make', searchMake)
    .pause(2000)
    .setValue('@model', searchModel)
    .setValue('@zipCode', searchZipCode)
    .setValue('@within', searchWithin)
    .click('@submitButton')
    .waitForElementPresent('body')
    .pause(5000)
    .navigate()
    .waitForElementPresent('.history-actions-tippy')
    .click('.history-actions-tippy')
    .useXpath()
    .click('(//div[@class="save"])[1]')
    .pause(5000)
}