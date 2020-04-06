module.exports = {
    url: 'https://www.google.com/',
    elements: {
        searchBar: 'input[name="q"]',
        results: '#res',
        searchBarXpath: {
            selector: '//input[@name="q"]',
            locateStrategy: 'xpath'
        }
    }
}