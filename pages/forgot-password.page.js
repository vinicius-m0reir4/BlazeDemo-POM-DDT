class ForgotPasswordPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('input[name="email"]');
    this.sendResetLinkButton = page.locator('button[type="submit"], input[type="submit"][value="Send Password Reset Link"]');
  }

  async open() {
    await this.page.goto('/password/reset');
  }

  async requestResetLink(email) {
    await this.emailInput.fill(email);
    await this.sendResetLinkButton.click();
  }
}

module.exports = ForgotPasswordPage;
