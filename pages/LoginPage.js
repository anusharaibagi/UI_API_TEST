const {expect} = require('@playwright/test')

export class LoginPage{
    constructor(page)
    {
        this.page = page;
        this.username = page.locator('#userName');
        this.password = page.locator('#password');
        this.loginButton = page.locator('#login');
        this.userNameValue = page.locator('#userName-value')
        this.logoutButton = page.locator('#submit')
    }

    async goto()
    {
        await this.loginButton.click()
    }
    async login(username, password)
    {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }

    async validation(username)
    {
        // await this.userNameValue.waitFor();
        await expect(this.userNameValue).toHaveText(username);
        await expect(this.logoutButton).toBeVisible();
    }
    
    async logout()
    {
        await this.logoutButton.click();
    }
}
