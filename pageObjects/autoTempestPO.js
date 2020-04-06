module.exports = {
    url: 'https://www.autotempest.com',
    elements: {
        make: {
            selector: '//select[@name="make"]',
            locateStrategy: 'xpath'
        },
        model: {
            selector: '//select[@name="model"]',
            locateStrategy: 'xpath'
        },
        zipCode: '[name="zip"]',

        submitButton: { 
            selector: '//button[@class="submit"]',
            locateStrategy: 'xpath'
        },
        within: {
            selector: '//select[@id="radius"]',
            locateStrategy: 'xpath'
        },
        saveSearch: {
            selector: '(//div[@class="save"])[1]',
            locateStrategy: 'xpath'
        },
        searchCarReviews: {
            selector: "(//a[text()='Search Car Reviews'])[1]",
            locateStrategy: 'xpath'
        },
        keywordCarReview: {
            selector: '//input[@id="keywords"]',
            locateStrategy: 'xpath'
        },
        minYear: {
            selector: '//input[@id="minyear"]',
            locateStrategy: 'xpath'
        },
        maxYear: {
            selector: '//input[@id="maxyear"]',
            locateStrategy: 'xpath'
        },
        searchReviewsButton: '//button[@class="submit"]',
        locateStrategy: 'xpath'
    }
        
}