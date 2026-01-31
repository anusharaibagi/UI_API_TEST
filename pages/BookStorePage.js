import { publicDecrypt } from 'crypto';
import { title } from 'process';

const {expect} = require('@playwright/test')
const fs = require('fs');

export class BookStorePage{
    constructor(page)
    {
        this.page = page;
        this.bookStore = this.page.locator('span', { hasText: /^Book Store$/ })
        this.searchBar = this.page.locator('#searchBox');
        this.rows = page.locator('.rt-tr-group');
        this.firstRow = this.rows.first()
    }
    async goto()
    {
        await this.bookStore.click();
    }

    async searchBook(book)
    {
        this.searchBar.fill(book)
    }

    async validateSearchResult(book)
    {
        const titleCell = this.firstRow.locator('.rt-td').nth(1);
        await expect(titleCell).toHaveText(book); 
    }

    async writeIntoFile()
    {
        const cells = this.firstRow.locator('.rt-td');
        const title = await cells.nth(1).textContent() 
        const author = await cells.nth(2).textContent() 
        const publisher = await cells.nth(3).textContent() 
        fs.writeFileSync(
           './utils/bookDetails.txt',
           `Title: ${title}\nAuthor: ${author}\nPublisher: ${publisher}`
        );
    }
}