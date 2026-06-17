const Observer = require('./Observer');

class LogObserver extends Observer {
  atualizar(pedido) {
    console.log(`Log registrado para o pedido ${pedido.id}`);
  }
}

module.exports = LogObserver;