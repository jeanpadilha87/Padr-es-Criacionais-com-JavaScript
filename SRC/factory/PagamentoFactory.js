const Pix = require('./Pix');
const Boleto = require('./Boleto');
const CartaoCredito = require('./CartaoCredito');

class PagamentoFactory {

  static criarPagamento(tipo) {

    switch (tipo.toLowerCase()) {

      case 'pix':
        return new Pix();

      case 'boleto':
        return new Boleto();

      case 'cartao':
        return new CartaoCredito();

      default:
        throw new Error('Forma de pagamento inválida.');

    }

  }

}

module.exports = PagamentoFactory;