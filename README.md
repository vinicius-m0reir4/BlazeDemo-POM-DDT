## Resultados dos testes

A automação contempla cinco fluxos do site BlazeDemo, utilizando Playwright, Page Object Model (POM) e Data-Driven Testing (DDT).

### Cenários automatizados

| Fluxo | Cenários |
|---|---:|
| Compra de passagens | 2 |
| Login | 2 |
| Cadastro de usuário | 2 |
| Recuperação de senha | 2 |
| Destino da semana | 1 |
| **Total** | **9** |

### Resultado da execução

- 9 testes aprovados.
- 0 testes reprovados.
- Navegador utilizado: Chromium.

### Observações

O site BlazeDemo é um ambiente de demonstração. No fluxo de login, o envio do formulário retorna HTTP 419 (Page Expired), comportamento validado pela automação.

Os testes verificam os comportamentos observáveis do ambiente, sem presumir funcionalidades que não são efetivamente implementadas pelo site.

### Como executar

Instalar as dependências:

```bash
npm install
```

Executar os testes:

```bash
npx playwright test
```

Abrir o relatório:

```bash
npx playwright show-report
```