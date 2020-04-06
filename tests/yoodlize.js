let yoodlize = {}
module.exports = {
    beforeEach: browser => {
        yoodlize = browser.page.yoodlizeObjects()
        yoodlize
            .navigate()
    },
    after: browser => {
        browser.end()
    },
    'Test 1': browser => {
        var searchTerm = 'Recreational Vehicles'
        yoodlize
        .click('@recVehicleSeeAll')
        .verify.containsText('@xpath2', searchTerm)
        .click('@blueButton')
        .pause(1000)
    },
    'Test 2': browser => {
        var searchTerm = 'Outdoor Gear'
        yoodlize
        .click('@outdoorGearSeeAll')
        .verify.containsText('@xpath2', searchTerm)
        .click('@blueButton')
        .pause(1000)
    },
    'Test 3': browser => {
        var searchTerm = 'Electronics'
        yoodlize
        .click('@electronicsSeeAll')
        .verify.containsText('@xpath2', searchTerm)
        .click('@blueButton')
        .pause(1000)
    },
    'Test 4': browser => {
        var searchTerm = 'partyWeddingEquipmentSeeAll'
        yoodlize
        .click('partyWeddingEquipmentSeeAll')
        .verify.containsText('@xpath2', searchTerm)
        .click('@blueButton')
        .pause(1000)
    },
    'Test 5': browser => {
        var searchTerm = 'Tools'
        yoodlize
        .click('toolsSeeAll')
        .verify.containsText('@xpath2', searchTerm)
        .click('@blueButton')
        .pause(1000)
    },
    'Test 6': browser => {
        var searchTerm = 'Clothing'
        yoodlize
        .click('clothingSeeAll')
        .verify.containsText('@xpath2', searchTerm)
        .click('@blueButton')
        .pause(1000)
    },
    'Test 7': browser => {
        var searchTerm = 'Home & Kitchen'
        yoodlize
        .click('homeKitchenSeeAll')
        .verify.containsText('@xpath2', searchTerm)
        .click('@blueButton')
        .pause(1000)
    }

}
