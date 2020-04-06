module.exports = {
    before: browser => {
        browser.url('https://devmountain-qa.github.io/employee-manager-v2/build/index.html')
            .waitForElementPresent('body')
    },
    after: browser => {
        browser.end()
    },
    'Michael Scott ID': browser => {
        
        var newEmployee = {name: "Michael Gary Scott", phone: '2342424324', title: 'Regional Manager'}
        browser
            .click('li[name="employee1"]')
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', newEmployee.name)
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', newEmployee.phone)
            .clearValue('input[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', newEmployee.title)
            .click('button[name="save"]')
            .pause(3000)
    }
}