const Observer = require('./Observer');

class EmailObserver extends Observer {
  atualizar(pedido) {
    console.log(`E-mail enviado para o pedido ${pedido.id}`);
  }
}

module.exports = EmailObserver;