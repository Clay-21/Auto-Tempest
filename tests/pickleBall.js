module.eports = {
    before: browser => {
        browser.url('https://www.livepickleball.com/')
            .waitForElementPresent('body')
},
    after: browser => {
            browser.end()
    },
    'Banner Test': browser => {
        browser
        
    } 

}
