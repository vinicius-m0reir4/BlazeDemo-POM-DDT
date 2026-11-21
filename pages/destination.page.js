const { expect } = require('@playwright/test');

class DestinationPage {
  constructor(page) {
    this.page = page;
    this.body = page.locator('body');
  }

  async open(path = '/vacation.html') {
    await this.page.goto(path);
  }

  async expectDestination(destination) {
    await expect(this.page).toHaveURL(/vacation\.html/);
    await expect(this.body).toContainText(/destination of the week/i);
    await expect(this.body).toContainText(new RegExp(destination, 'i'));
  }
}

module.exports = DestinationPage;
