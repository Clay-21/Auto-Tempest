module.exports = {
    url: 'https://devmountain-qa.github.io/Automation-Basics/build/',
    elements: {
        
        inputLine: {
            selector: '(//input[@name="evenOddInput"])[1]',
            locateStrategy: 'xpath'
        },
        splitButton: {
            selector: '//button[@name="evenOddButton"]',
            locateStrategy: 'xpath'
        },
        evenResults: {
            selector: '//span[@name="evenResults"]',
            locateStrategy: 'xpath'
        },
        oddResults: {
            selector: '//span[@name="oddResults"]',
            locateStrategy: 'xpath'
        },
        filterInputObjectLine: {
            selector: '(//input[@class="inputLine"])[2]',
            locateStrategy: 'xpath'
        
        },
        resBox: {
            selector: '//span[@class="resultsBox filterObjectRB"]',
            locateStrategy: 'xpath'
        },
        button2: {
            selector: '(//button[@class="confirmationButton"])[2]',
            locateStrategy: 'xpath'
        },
        stringInputLine: {
            selector: '(//input[@class="inputLine"])[3]',
            locateStrategy: 'xpath'
        },
        button3: {
            selector: '(//button[@class="confirmationButton"])[3]',
            locateStrategy: 'xpath'
        },
        resBox2: {
            selector: '//span[@class="resultsBox filterStringRB"]',
            locateStrategy: 'xpath'
        },
        palindromeInputLine: {
            selector: '//input[@name="palindromeInput"]',
            locateStrategy: 'xpath'
        },
        button4: {
            selector: '//button[@name="palindromeButton"]',
            locateStrategy: 'xpath'
        },
        resBox3: {
            selector: '//span[@name="palindromeResults"]',
            locateStrategy: 'xpath'
        },
        sumInputLine1: {
            selector: '//input[@name="sumInput1"]',
            locateStrategy: 'xpath'
        },
        sumInputLine2: {
            selector: '//input[@name="sumInput2"]',
            locateStrategy: 'xpath'
        },
        resBox4: {
            selector: '//span[@name="sumResults"]',
            locateStrategy: 'xpath'
        },
        button5: {
            selector: '//button[@name="sumButton"]',
            locateStrategy: 'xpath'
        }
        
    }
} 