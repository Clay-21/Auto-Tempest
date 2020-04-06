module.exports = {
    before: browser => {
        browser.url('https://devmountain-qa.github.io/employee-manager-v2/build/index.html')
            .waitForElementPresent('body')
    },
    after: browser => {
        browser.end()
    },
    'Michael Scott ID': browser => {
        browser
            .click('li[name="employee50"]')
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', 'Michael Scott')
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', '8014525199')
            .clearValue('input[name="emailEntry"]')
            .setValue('input[name="emailEntry"]', 'mgs@dundermiflin.com')
            .clearValue('input[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', 'Regional Manager')
            .click('button[name="save"]')
            .pause(3000)
    
    },
    'Dwight Schrute ID': browser => {
        browser
            .click('li[name="employee56"]')
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', 'Dwight Schrute')
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', '8014525199')
            .clearValue('input[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', 'Assistant to the Regional Manager')
            .click('button[name="save"]')
            .pause(3000)
            
    },
    'Jim Halpert ID': browser => {
        browser
            .click('li[name="employee80"]')
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', 'Jim Halpert')
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', '8014525199')
            .clearValue('input[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', 'Sales Rep')
            .click('button[name="save"]')
            .pause(3000)
            
    },
    'Pam Beasley Halpert ID': browser => {
        browser
            .click('li[name="employee300"]')
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', 'Pam Beasley Halpert')
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', '8014525199')
            .clearValue('input[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', 'Office Administrator')
            .click('button[name="save"]')
            .pause(3000)
            
    },
    'Oscar Martinez ID': browser => {
        browser
            .click('li[name="employee360"]')
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', 'Oscar Martinez')
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', '8014525199')
            .clearValue('input[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', 'Accountant')
            .click('button[name="save"]')
            .pause(3000)
            
    },
    'Angela Martin ID': browser => {
        browser
            .click('li[name="employee369"]')
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', 'Angela Martin')
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', '8014525199')
            .clearValue('input[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', 'Accountant')
            .click('button[name="save"]')
            .pause(3000)
            
    },
    'Kevin Malone ID': browser => {
        browser
            .click('li[name="employee588"]')
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', 'Kevin Malone')
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', '8014525199')
            .clearValue('input[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', 'Accountant')
            .click('button[name="save"]')
            .pause(3000)
            
    },
    'Phylis Lapin Vance': browser => {
        browser
            .click('li[name="employee590"]')
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', 'Phylis Lapin Vance')
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', '8014525199')
            .clearValue('input[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', 'Sales Rep')
            .click('button[name="save"]')
            .pause(3000)
    },
    'Stanley Hudson ID': browser => {
        browser
            .click('li[name="employee9801"]')
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', 'Stanley Hudson')
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', '8014525199')
            .clearValue('input[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', 'Sales Rep')
            .click('button[name="save"]')
            .pause(3000)
    },
    'Creed Braton ID': browser => {
        browser
            .click('li[name="employee9803"]')
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', 'Creed Braton')
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', '8014525199')
            .clearValue('input[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', 'Quabity Ashwoods')
            .click('button[name="save"]')
            .pause(50000)
    },
    'Ryan Howard ID': browser => {
        browser
            .click('li[name="addEmployee"]')
            .click('li[name="employee11"]')
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', 'Ryan Howard')
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', '8014525199')
            .clearValue('input[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', 'Temp')
            .click('button[name="save"]')
            .pause(3000)
    // },
    // 'Search Employee': browser => {
    //     browser
    //         .click('button[name="clearSearch"')
    //         .setValue('input[name="searchBox"]','Michael Scott', browser.Keys.ENTER)
    },
    'Delete Employee': browser => {
        browser
            .click('li[name="employee11153"]')
            .click('button[name="delete"]')
            .pause(3000)
    }
    
    
}