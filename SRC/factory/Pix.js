const Pagamento = require('./Pagamento');

class Pix extends Pagamento {

  processar(valor) {
    console.log(`Pagamento via PIX realizado: R$ ${valor}`);
  }

}

module.exports = Pix;