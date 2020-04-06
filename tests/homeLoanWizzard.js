var inputArray = [
   {city: 'Ogden', purchase: '250', payment: '150', street: '565 S 50 W', address: 'Hurricane, UT, 84737', first: 'Clay', last: 'Orton', email: 'clayorton@gmail.com' },
   {city: 'Saint George', purchase: '500000', payment: '300000', street: '910 E 1250 S', address: 'Ogden, UT, 84404', first: 'Ron', last: 'Swanson', email: 'dsilver@gmail.com'}
]
let homeLoan = {}
module.exports = {
    beforeEach: browser => {
        homeLoan = browser.page.homeLoanPageObjects()
        homeLoan
            .navigate()       
    },
    after: browser => {
        browser 
            .end()
    },
    'My Test': browser => {
        homeLoan
            .pause(6000)
    }
    // inputArray.forEach(i => {

    // })
}


