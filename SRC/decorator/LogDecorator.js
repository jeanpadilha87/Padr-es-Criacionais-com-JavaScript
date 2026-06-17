const PagamentoDecorator = require('./PagamentoDecorator');

class LogDecorator extends PagamentoDecorator {
  processar(valor) {
    console.log(`[LOG] Valor cobrado: R$ ${valor}`);

    super.processar(valor);
  }
}

module.exports = LogDecorator;