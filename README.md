# QA Automation Assignment – Playwright (JavaScript)

## Overview
This repository contains my QA Automation assignment using **Playwright with JavaScript**.  
It includes both **UI automation** (Book Store Application) and **API automation**.  
The framework follows the **Page Object Model (POM)** structure.

## Setup
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd UI_API_TEST

2. Install dependencies:
    ```bash
    npm install

3. Running Tests:
    ```bash
    npx playwright test

4. Generate HTML report:
    ```bash
    npx playwright test --reporter=html
    npx playwright show-report

**Test Reports**
Playwright HTML report is generated in playwright-report/.
Screenshots of the report are saved in /reports.

**Notes**
ReqRes API endpoints return 403 due to Cloudflare restrictions.
To demonstrate working CRUD automation, I used JSONPlaceholder API.
UI tests cover login, validation, search, book details extraction, and logout.


