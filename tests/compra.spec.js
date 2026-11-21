const { test } = require('@playwright/test');
const purchaseData = require('../data/compra.data');
const HomePage = require('../pages/home.page');
const ReservePage = require('../pages/reserve.page');
const PurchasePage = require('../pages/purchase.page');
const ConfirmationPage = require('../pages/confirmation.page');

test.describe('Fluxo de compra - POM + DDT', () => {
  for (const data of purchaseData) {
    test(data.caso, async ({ page }) => {
      const homePage = new HomePage(page);
      const reservePage = new ReservePage(page);
      const purchasePage = new PurchasePage(page);
      const confirmationPage = new ConfirmationPage(page);

      await homePage.open();
      await homePage.searchFlights(data.origem, data.destino);
      await reservePage.expectFlightResults();
      await reservePage.chooseFlight(0);
      await purchasePage.fillPassengerForm(data.passageiro);
      await purchasePage.submitPurchase();
      await confirmationPage.expectPurchaseConfirmation();
    });
  }
});
