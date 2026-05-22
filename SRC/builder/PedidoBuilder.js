const Pedido = require('./Pedido');

class PedidoBuilder {

  constructor() {

    this.itens = [];
    this.endereco = '';
    this.pagamento = '';

  }

  adicionarItem(item) {

    this.itens.push(item);

    return this;
  }

  setEndereco(endereco) {

    this.endereco = endereco;

    return this;
  }

  setPagamento(pagamento) {

    this.pagamento = pagamento;

    return this;
  }

  build() {

    // validação obrigatória
    if (this.itens.length === 0) {
      throw new Error('O pedido precisa ter pelo menos um item.');
    }

    return new Pedido(
      this.itens,
      this.endereco,
      this.pagamento
    );

  }

}

module.exports = PedidoBuilder;