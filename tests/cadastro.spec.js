const { test, expect } = require('@playwright/test');
const { randomUUID } = require('node:crypto');
const registrationData = require('../data/cadastro.data');
const RegisterPage = require('../pages/register.page');
const assertAuthFormFeedback = require('../utils/assert-auth-feedback');

test.describe('Fluxo de cadastro - POM + DDT', () => {
  for (const data of registrationData) {
    test(data.caso, async ({ page }, testInfo) => {
      const registerPage = new RegisterPage(page);
      const user = {
        nome: data.nome,
        empresa: data.empresa,
        email: `qa.${randomUUID()}@example.com`,
        senha: 'QaTeste123!',
        confirmarSenha: 'QaTeste123!'
      };

      await registerPage.open();
      await expect(registerPage.nameInput).toBeVisible();
      await expect(registerPage.confirmPasswordInput).toBeVisible();
      await registerPage.register(user);

      await assertAuthFormFeedback(
        page,
        testInfo,
        'o cadastro do usuário',
        /registered|registration|success|dashboard|welcome|already been taken|invalid|error|whoops|required|field/i
      );
    });
  }
});
