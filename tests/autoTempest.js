let auto = {}
module.exports = {
    before: browser => {
        auto = browser.page.autoTempestPO()
        auto 
            .navigate()
    },
    after: browser => {
        browser
            .end()
    },
        'Searching AutoTempest': browser => {
            var searchMake = 'Toyota'
            var searchModel = 'Tacoma'
            var searchZipCode = '84414'
            var searchWithin = '50'
            var searchKeyword = 'Toyota'
            var ReviewsMinYear = '2019'
            var ReviewsMaxYear = '2020'
            
        auto
            .setValue('@make', searchMake)
            .pause(6000)
            .setValue('@model', searchModel)
            .setValue('@zipCode', searchZipCode)
            .setValue('@within', searchWithin)
            .pause(5000)
            .click('@submitButton')
            .waitForElementPresent('body')
            .pause(10000)
            .navigate()
            .waitForElementPresent('.history-actions-tippy')
            .click('.history-actions-tippy')
            .click('@saveSearch')
            .pause(5000)
            .click('@searchCarReviews')
            .pause(10000)
            .setValue('@keywordCarReview', searchKeyword)
            .pause(5000)
            .setValue('@minYear', ReviewsMinYear)
            .setValue('@maxYear', ReviewsMaxYear)
            .pause(5000)
            .click('@searchReviewsButton')
            .pause(50000)

    }
}
