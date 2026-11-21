
const { expect } = require('@playwright/test');

class ConfirmationPage {
  constructor(page) {
    this.page = page;

    this.confirmationHeading = page.getByRole('heading', {
      name: /thank you for your purchase today/i
    });

    this.purchaseStatus = page.getByText('PendingCapture', {
      exact: true
    });
  }

  async expectPurchaseConfirmation() {
    // Verifica se a mensagem de compra realizada aparece.
    await expect(this.confirmationHeading).toBeVisible();

    // Verifica se o status da transação está apresentado.
    await expect(this.purchaseStatus).toBeVisible();

    // Verifica se o comprovante apresenta um ID numérico.
    await expect(this.page.locator('body'))
      .toContainText(/Id\s+\d+/);
  }
}

module.exports = ConfirmationPage;
