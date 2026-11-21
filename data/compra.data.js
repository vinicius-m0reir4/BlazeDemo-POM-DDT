// Massa de dados para demonstrar DDT no fluxo de compra.
// Todos os dados abaixo são fictícios e destinados somente ao site de demonstração.

module.exports = [
  {
    caso: 'Compra de Paris para Buenos Aires',
    origem: 'Paris',
    destino: 'Buenos Aires',
    passageiro: {
      nome: 'Vinicius Moreira',
      endereco: 'Rua das Flores, 100',
      cidade: 'Juazeiro do Norte',
      estado: 'Ceara',
      cep: '63000-000',
      bandeira: 'Visa',
      numeroCartao: '4111111111111111',
      mesValidade: '11',
      anoValidade: '2028',
      nomeNoCartao: 'VINICIUS MOREIRA'
    }
  },
  {
    caso: 'Compra de Boston para London',
    origem: 'Boston',
    destino: 'London',
    passageiro: {
      nome: 'Pessoa Teste QA',
      endereco: 'Avenida Central, 250',
      cidade: 'Barbalha',
      estado: 'Ceara',
      cep: '63180-000',
      bandeira: 'American Express',
      numeroCartao: '378282246310005',
      mesValidade: '08',
      anoValidade: '2029',
      nomeNoCartao: 'PESSOA TESTE QA'
    }
  }
];
