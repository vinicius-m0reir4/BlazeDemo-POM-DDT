// O exercício do BlazeDemo já apresentou 419 Page Expired após o envio do login.
// Os dois conjuntos permitem exercitar combinações distintas de credenciais.

module.exports = [
  {
    caso: 'Envio com credenciais de teste',
    email: 'qa.usuario@example.com',
    senha: 'SenhaTeste123!'
  },
  {
    caso: 'Envio com credenciais inválidas',
    email: 'usuario.inexistente@example.com',
    senha: 'senha-incorreta'
  }
];
