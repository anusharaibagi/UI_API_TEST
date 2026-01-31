const {test} = require('@playwright/test')

const {LoginPage} = require('../../pages/LoginPage');
const {BookStorePage} = require('../../pages/BookStorePage');

const username = 'anusharaibagi'
const password = 'Finac@123'

test('Navigate to Book store application and validate cred', async({page})=>{
    await page.goto('https://demoqa.com/');
    await page.waitForLoadState('networkidle');
    const totalApplication = page.locator('.card-body h5');
    await totalApplication.filter({hasText: 'Book Store Application'}).click();

    //Pages
    const loginPage = new LoginPage(page)
    const bookStorePage = new BookStorePage(page)

    //login
    await loginPage.goto(); 
    await loginPage.login(username,password);

    //UserName Validation
    await loginPage.validation(username);
    
    //BookStorePage
    await bookStorePage.goto();
    await bookStorePage.searchBook('Learning JavaScript Design Patterns')
    await bookStorePage.validateSearchResult('Learning JavaScript Design Patterns')
    await bookStorePage.writeIntoFile();

    //Logout
    await loginPage.logout();
    
})