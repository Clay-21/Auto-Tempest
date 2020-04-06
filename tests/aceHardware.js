let ace = {}
module.exports = {
    before: browser => {
        ace = browser.page.acePageObjects()
        ace 
            .navigate()
    },
    after: browser => {
        browser
            .end()
    },
        'Searching ACE': browser => {
            // var searchTerm = 'Hammer'
            // var searchTerm1 = 'Treager'
            // var searchTerm2 = 'Lawn Mower'
            // var searchTerm3 = 'Power Tools'
            // var searchTerm4 = 'Patio Furniture'
               ace
                // .setValue('@searchBarXpath', [searchTerm, browser.Keys.ENTER])
                // .pause(500)
                // .click('@homeButton')
                // .pause(500)
                // .setValue('@searchBarXpath', [searchTerm1, browser.Keys.ENTER])
                // .pause(500)
                // .click('@homeButton')
                // .pause(500)
                // .setValue('@searchBarXpath', [searchTerm2, browser.Keys.ENTER])
                // .pause(500)
                // .click('@homeButton')
                // .pause(500)
                // .setValue('@searchBarXpath', [searchTerm3, browser.Keys.ENTER])
                // .pause(500)
                // .click('@homeButton')
                // .pause(500)
                // .setValue('@searchBarXpath', [searchTerm4, browser.Keys.ENTER])
                // .pause(500)
                // .click('@homeButton')
                // .pause(500)
                browser.url("http://www.acehardware.com")
                // browser.pause(2000) only enable if needed
                browser.element("css selector", "#acsFocusFirst", result => {
                    if (result.status != -1) {
                        console.log("Element exists");
                        browser.click("#acsFocusFirst");
                    } else {
                        console.log("Element does not exist")
                    }
                    // console.log(result)
                })
                browser.setValue(".mz-searchbox-input", ["Traeger", browser.Keys.ENTER])
                browser.waitForElementVisible(".mz-pagetitle")
                browser.assert.containsText(".mz-pagetitle", "Traeger")
                browser.click(".mz-searchbox-input") 
                browser.clearValue(".mz-searchbox-input")  
                browser.setValue(".mz-searchbox-input", ["Hammer", browser.Keys.ENTER])
                browser.waitForElementVisible(".mz-pagetitle")
                browser.assert.containsText(".mz-pagetitle", "Hammer") 
                browser.clearValue(".mz-searchbox-input") 
                .pause(200)   
                browser.setValue(".mz-searchbox-input", ["Lawn Mower", browser.Keys.ENTER])
                browser.waitForElementVisible(".mz-pagetitle")
                browser.assert.containsText(".mz-pagetitle", "Lawn Mower") 
                browser.clearValue(".mz-searchbox-input") 
                .pause(200) 
                browser.setValue(".mz-searchbox-input", ["Power Tools", browser.Keys.ENTER])
                browser.waitForElementVisible(".mz-pagetitle")
                browser.assert.containsText(".mz-pagetitle", "Power Tools") 
                browser.clearValue(".mz-searchbox-input")  
                browser.setValue(".mz-searchbox-input", ["Patio Furniture", browser.Keys.ENTER])
                browser.waitForElementVisible(".mz-pagetitle")
                .pause(200)
                browser.assert.containsText(".mz-pagetitle", "Patio Furniture") 
                .pause(300)
        },
    }