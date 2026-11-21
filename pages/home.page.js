class HomePage {
  constructor(page) {
    this.page = page;
    this.departureSelect = page.locator('select[name="fromPort"]');
    this.destinationSelect = page.locator('select[name="toPort"]');
    this.findFlightsButton = page.locator('input[type="submit"][value="Find Flights"]');
    this.destinationOfWeekLink = page.getByRole('link', { name: /destination of the week/i });
  }

  async open() {
    await this.page.goto('/');
  }

  async searchFlights(departure, destination) {
    await this.departureSelect.selectOption({ label: departure });
    await this.destinationSelect.selectOption({ label: destination });
    await this.findFlightsButton.click();
  }

  async openDestinationOfWeek() {
    await this.destinationOfWeekLink.click();
  }
}

module.exports = HomePage;
