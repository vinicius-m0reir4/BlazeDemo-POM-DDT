class RegisterPage {
  constructor(page) {
    this.page = page;
    this.nameInput = page.locator('input[name="name"]');
    this.companyInput = page.locator('input[name="company"]');
    this.emailInput = page.locator('input[name="email"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.confirmPasswordInput = page.locator('input[name="password_confirmation"]');
    this.registerButton = page.locator('button[type="submit"], input[type="submit"][value="Register"]');
  }

  async open() {
    await this.page.goto('/register');
  }

  async register(user) {
    await this.nameInput.fill(user.nome);
    await this.companyInput.fill(user.empresa);
    await this.emailInput.fill(user.email);
    await this.passwordInput.fill(user.senha);
    await this.confirmPasswordInput.fill(user.confirmarSenha);
    await this.registerButton.click();
  }
}

module.exports = RegisterPage;
