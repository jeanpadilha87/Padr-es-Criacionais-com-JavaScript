const Pagamento = require('./Pagamento');

class CartaoCredito extends Pagamento {

  processar(valor) {
    console.log(`Pagamento via cartão de crédito realizado: R$ ${valor}`);
  }

}

module.exports = CartaoCredito;