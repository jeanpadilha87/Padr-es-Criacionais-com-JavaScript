const PagamentoDecorator = require('./PagamentoDecorator');

class DescontoDecorator extends PagamentoDecorator {
  constructor(pagamento, percentual) {
    super(pagamento);
    this.percentual = percentual;
  }

  processar(valor) {
    const valorComDesconto =
      valor - (valor * this.percentual) / 100;

    console.log(
      `Desconto de ${this.percentual}% aplicado. Novo valor: R$ ${valorComDesconto}`
    );

    super.processar(valorComDesconto);
  }
}

module.exports = DescontoDecorator;