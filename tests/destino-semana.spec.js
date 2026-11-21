const { test } = require('@playwright/test');
const destinationData = require('../data/destino.data');
const HomePage = require('../pages/home.page');
const DestinationPage = require('../pages/destination.page');

test.describe('Destino da semana - POM + DDT', () => {
  for (const data of destinationData) {
    test(data.caso, async ({ page }) => {
      const homePage = new HomePage(page);
      const destinationPage = new DestinationPage(page);

      await homePage.open();
      await homePage.openDestinationOfWeek();
      await destinationPage.expectDestination(data.destinoEsperado);
    });
  }
});
