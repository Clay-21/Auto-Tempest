module.exports = {
    url: 'https://www.acehardware.com',
    elements: {
        searchBar: 'span[class="mz-searchbox-field"]',
        searchBarXpath: {
            selector: '//input[@class="mz-searchbox-input show-placeholder"]',
            locateStrategy: 'xpath'
        },
        homeButton: {
            selector: '//div[@class="mz-storebranding"]',
            locateStrategy: 'xpath'
        },
        closePopUp: {
            selector: '//a[@id="acsFocusFirst"]',
            locateStrategy: 'xpath'
        },
        clearSearchHistory: {
            selector: '//span[@class="clearSearch"]',
            locateStrategy: 'xpath'
        }
    
    }
}