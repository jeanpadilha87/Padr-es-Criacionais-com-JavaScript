const Pagamento = require('./Pagamento');

class Boleto extends Pagamento {

  processar(valor) {
    console.log(`Pagamento via boleto realizado: R$ ${valor}`);
  }

}

module.exports = Boleto;