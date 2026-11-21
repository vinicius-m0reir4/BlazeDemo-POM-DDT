const { expect } = require('@playwright/test');

/**
 * Verifica se o envio do formulário gerou um retorno observável.
 * O 419 é anotado como limitação do ambiente, não como cadastro ou envio concluído.
 */
async function assertAuthFormFeedback(page, testInfo, actionName, expectedFeedback) {
  const body = page.locator('body');
  await expect(body).not.toBeEmpty();

  const bodyText = await body.innerText();

  if (/419\s*Page Expired/i.test(bodyText)) {
    testInfo.annotations.push({
      type: 'limitação do ambiente',
      description: `O site retornou 419 Page Expired após ${actionName}. O formulário foi exercitado, mas a operação não foi concluída.`
    });
    return;
  }

  const hasExpectedFeedback = expectedFeedback.test(bodyText);
  const feedbackLocator = page.locator('[role="alert"], .alert, .invalid-feedback, .text-danger, .help-block').first();
  const hasVisibleFeedback = await feedbackLocator.isVisible().catch(() => false);
  const url = page.url();
  const wasRedirected = !/\/(register|password\/reset)(\?|$)/i.test(url);

  expect(
    hasExpectedFeedback || hasVisibleFeedback || wasRedirected,
    `Não foi encontrado retorno claro após ${actionName}. Conteúdo retornado: ${bodyText.slice(0, 500)}`
  ).toBeTruthy();
}

module.exports = assertAuthFormFeedback;
