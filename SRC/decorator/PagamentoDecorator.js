const Pagamento = require('../factory/Pagamento');

class PagamentoDecorator extends Pagamento {
  constructor(pagamento) {
    super();
    this.pagamento = pagamento;
  }

  processar(valor) {
    this.pagamento.processar(valor);
  }
}

module.exports = PagamentoDecorator;