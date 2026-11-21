class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('input[name="email"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.rememberMeCheckbox = page.locator('input[name="remember"]');
    this.loginButton = page.locator('button[type="submit"], input[type="submit"][value="Login"]');
    this.forgotPasswordLink = page.getByRole('link', { name: /forgot your password/i });
  }

  async open() {
    await this.page.goto('/login');
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    if (await this.rememberMeCheckbox.count()) {
      await this.rememberMeCheckbox.check();
    }
    await this.loginButton.click();
  }

  async openForgotPassword() {
    await this.forgotPasswordLink.click();
  }
}

module.exports = LoginPage;
