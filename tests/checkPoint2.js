let checkPoint2 = {}
module.exports = {
    beforeEach: browser => {
        checkPoint2 = browser.page.checkPoint2Objects()
        checkPoint2
            .navigate()
    },
    after: browser => {
        checkPoint2
            .end()
    },
        'Evens and Odds': browser => {
            var searchTerm = '1,2,3,4,5,6,7,8'
            var even = '2,4,6,8'
            var odd = '1,3,5,7'
            checkPoint2
            .setValue('@inputLine', searchTerm)
            .click('@splitButton')
            .verify.containsText('@evenResults', even)
            .verify.containsText('@oddResults', odd)
            .pause(2000)
        },
        'Filter Object': browser => {
            var searchTerm = 'name'
            checkPoint2
            .setValue('@filterInputObjectLine', searchTerm)
            .click('@button2')
            .pause(2000)
            .verify.containsText('@resBox', searchTerm)
               
        },
        'Filter String': browser => {
         var searchTerm = 'James'
         checkPoint2
         .setValue('@stringInputLine', searchTerm)
         .click('@button3')
         .pause(2000)
         .verify.containsText('@resBox2', searchTerm) 
        },
        'Palindrome Filter': browser => {
         var searchTerm = 'racecar'
         var answer = 'true'
         checkPoint2
         .setValue('@palindromeInputLine', searchTerm)
         .click('@button4')
         .verify.containsText('@resBox3', answer)
         .pause(2000)
        },
        'Sum Problem': browser => {
            var searchTerm1 = '342'
            var searchTerm2 = '231'
            var addition = '573'
            checkPoint2
            .setValue('@sumInputLine1', searchTerm1)
            .setValue('@sumInputLine2', searchTerm2)
            .click('@button5')
            .pause(2000)
            .verify.containsText('@resBox4', addition)
            .pause(2000)
        }
}