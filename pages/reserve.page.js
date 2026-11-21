const { expect } = require('@playwright/test');

class ReservePage {
  constructor(page) {
    this.page = page;
    this.flightRows = page.locator('table tbody tr');
    this.chooseFlightButtons = page.locator('input[type="submit"][value="Choose This Flight"]');
  }

  async expectFlightResults() {
    await expect(this.flightRows.first()).toBeVisible();
    await expect(this.chooseFlightButtons.first()).toBeVisible();
  }

  async chooseFlight(index = 0) {
    await this.chooseFlightButtons.nth(index).click();
  }
}

module.exports = ReservePage;
