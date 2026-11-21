class PurchasePage {
  constructor(page) {
    this.page = page;
    this.nameInput = page.locator('input[name="inputName"]');
    this.addressInput = page.locator('input[name="address"]');
    this.cityInput = page.locator('input[name="city"]');
    this.stateInput = page.locator('input[name="state"]');
    this.zipCodeInput = page.locator('input[name="zipCode"]');
    this.cardTypeSelect = page.locator('select[name="cardType"]');
    this.cardNumberInput = page.locator('input[name="creditCardNumber"]');
    this.cardMonthInput = page.locator('input[name="creditCardMonth"]');
    this.cardYearInput = page.locator('input[name="creditCardYear"]');
    this.nameOnCardInput = page.locator('input[name="nameOnCard"]');
    this.rememberMeCheckbox = page.locator('input[name="rememberMe"]');
    this.purchaseButton = page.locator('input[type="submit"][value="Purchase Flight"]');
  }

  async fillPassengerForm(passenger) {
    await this.nameInput.fill(passenger.nome);
    await this.addressInput.fill(passenger.endereco);
    await this.cityInput.fill(passenger.cidade);
    await this.stateInput.fill(passenger.estado);
    await this.zipCodeInput.fill(passenger.cep);
    await this.cardTypeSelect.selectOption({ label: passenger.bandeira });
    await this.cardNumberInput.fill(passenger.numeroCartao);
    await this.cardMonthInput.fill(passenger.mesValidade);
    await this.cardYearInput.fill(passenger.anoValidade);
    await this.nameOnCardInput.fill(passenger.nomeNoCartao);

    // Remember Me é opcional; só é marcada quando estiver disponível.
    if (await this.rememberMeCheckbox.count()) {
      await this.rememberMeCheckbox.check();
    }
  }

  async submitPurchase() {
    await this.purchaseButton.click();
  }
}

module.exports = PurchasePage;
