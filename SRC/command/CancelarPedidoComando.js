const Comando = require('./Comando');

class CancelarPedidoComando extends Comando {
  constructor(pedido) {
    super();

    this.pedido = pedido;
    this.statusAnterior = pedido.status;
  }

  executar() {
    this.pedido.status = 'CANCELADO';

    console.log('Pedido cancelado.');
  }

  desfazer() {
    this.pedido.status = this.statusAnterior;

    console.log(
      `Cancelamento desfeito. Status: ${this.pedido.status}`
    );
  }
}

module.exports = CancelarPedidoComando;