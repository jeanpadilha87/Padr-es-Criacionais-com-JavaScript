const Observer = require('./Observer');

class EstoqueObserver extends Observer {
  atualizar(pedido) {
    console.log(`Estoque atualizado para o pedido ${pedido.id}`);
  }
}

module.exports = EstoqueObserver;