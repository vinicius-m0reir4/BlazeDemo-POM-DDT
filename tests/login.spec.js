
const { test, expect } = require('@playwright/test');
const loginData = require('../data/login.data');
const LoginPage = require('../pages/login.page');

test.describe('Fluxo de login - POM + DDT', () => {

  for (const data of loginData) {

    test(data.caso, async ({ page }) => {

      const loginPage = new LoginPage(page);

      await loginPage.open();

      await expect(loginPage.emailInput).toBeVisible();
      await expect(loginPage.passwordInput).toBeVisible();

      // Aguarda a resposta da requisição de login.
      const responsePromise = page.waitForResponse(response =>
        response.request().method() === 'POST' &&
        new URL(response.url()).pathname === '/login'
      );

      // Executa o login com os dados do DDT.
      await loginPage.login(data.email, data.senha);

      const response = await responsePromise;

      // Valida o retorno HTTP do servidor.
      expect(response.status()).toBe(419);

      // Valida a mensagem apresentada pelo site.
      await expect(page.locator('body'))
        .toContainText(/419\s*Page Expired/i);

    });

  }

});
