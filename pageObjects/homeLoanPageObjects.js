module.exports = {
    url: 'http://localhost:3000/#/',
    elements: {
        homePageTitle: {
            selector: '//h1[@class="home-text"]',
            locateStrategy: 'xpath'
        },
        homePageButton: {
            selector: '//button[@class="home-btn"]',
            locateStrategy: 'xpath'
        },
        homePurchase: {
            selector: 'select[id="loanTypes"] option[value="Home Purchase"]',
            locateStrategy: 'xpath'
        }, 
        homeRefinance: {
            selector: 'select[id="loanTypes"] option[value="Refinance"]',
            locateStrategy: 'xpath'
        },
        homeEquity: {
            selector: 'select[id="loanTypes"] option[value="Home Equity"]',
            locateStrategy: 'xpath'
        },
        button2: {
            selector: '//button[@class="margin-btn"]',
            locateStrategy: 'xpath'
        },
        cityName: {
            selector: '//input[@placeholder="city name"]',
            locateStrategy: 'xpath'
        },
        button3: {
            selector: '//button[@class="wTwo-btn"]',
            locateStrategy: 'xpath'
        },
        primaryHomeButton: {
            selector: '//button[@value="Primary Home"]',
            locateStrategy: 'xpath'
        },
        rentalPropertyButton: {
            selector: '//button[@value="Rental Property"]',
            locateStrategy: 'xpath'
        },
        secondaryHomeButton: {
            selector: '//button[@value="Secondary Home"]',
            locateStrategy: 'xpath'
        },
        yesButton1: {
            selector: '//button[@name="yesButton"]',
            locateStrategy: 'xpath'
        },
        noButton1: {
            selector: '//button[@name="noButton"]',
            locateStrategy: 'xpath'
        },
        yesButton2: {
            selector: '//button[@name="yesButton"]',
            locateStrategy: 'xpath'
        },
        noButton2: {
            selector: '//button[@name="noButton"]',
            locateStrategy: 'xpath'
        },
        priceInput: {
            selector: '//input[@name="price"]',
            locateStrategy: 'xpath'
        },
        downPaymentInput: {
            selector: '//input[@name="down"]',
            locateStrategy: 'xpath'
        },
        excellentButton: {
            selector: '//button[@value="excellent"]',
            locateStrategy: 'xpath'
        },
        goodButton: {
            selector: '//button[@value="good"]',
            locateStrategy: 'xpath'
        },
        fairButton: {
            selector: '//button[@value="fair"]',
            locateStrategy: 'xpath'
        },
        poorButton: {
            selector: '//button[@value="poor"]',
            locateStrategy: 'xpath'
        },
        noButton3: {
            selector: '//button[@value="Has never been in bankruptcy"]',
            locateStrategy: 'xpath'
        },
        bankruptcyButton: {
            selector: '//button[@value="Has had bankruptcy before"]',
            locateStrategy: 'xpath'
        },
        forclosureButton: {
            selector: '//button[@value="Has had a forclosure before"]',
            locateStrategy: 'xpath'
        },
        bothButton: {
            selector: '//button[@value="Has had both a forclosure and a bankruptcy"]',
            locateStrategy: 'xpath'
        },
        streetAddressInput: {
            selector: '//input[@id="addressOne"]',
            locateStrategy: 'xpath'
        },
        optionalAddressInput: {
            selector: '//input[@id="addressTwo"]',
            locateStrategy: 'xpath'
        },
        cityAddressInput: {
            selector: '//input[@id="addressThree"]',
            locateStrategy: 'xpath'
        },
        firstNameInput: {
            selector: '//input[@id="first"]',
            locateStrategy: 'xpath'
        },
        lastNameInput: {
            selector: '//input[@id="last"]',
            locateStrategy: 'xpath'
        },
        emailInput: {
            selector: '//input[@id="email"]',
            locateStrategy: 'xpath'
        },
        sendButton: {
            selector: '//button[@name="sendButton"]',
            locateStrategy: 'xpath'
        },
        startAgainButton: {
            selector: '//button[@name="restartButton"]',
            locateStrategy: 'xpath'
        }
    }
}