const { test, expect } = require('@playwright/test');
const resetData = require('../data/esqueci-senha.data');
const ForgotPasswordPage = require('../pages/forgot-password.page');
const assertAuthFormFeedback = require('../utils/assert-auth-feedback');

test.describe('Fluxo de recuperação de senha - POM + DDT', () => {
  for (const data of resetData) {
    test(data.caso, async ({ page }, testInfo) => {
      const forgotPasswordPage = new ForgotPasswordPage(page);

      await forgotPasswordPage.open();
      await expect(forgotPasswordPage.emailInput).toBeVisible();
      await forgotPasswordPage.requestResetLink(data.email);

      await assertAuthFormFeedback(
        page,
        testInfo,
        'a solicitação de recuperação de senha',
        /password reset link|reset link|we can't find|not found|sent|success|invalid|error|whoops|field/i
      );
    });
  }
});
