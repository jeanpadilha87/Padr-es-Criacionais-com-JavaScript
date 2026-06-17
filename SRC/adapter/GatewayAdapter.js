const Pagamento = require('../factory/Pagamento');
const GatewayLegado = require('./GatewayLegado');

class GatewayAdapter extends Pagamento {
  constructor() {
    super();
    this.gatewayLegado = new GatewayLegado();
  }

  processar(valor) {
    this.gatewayLegado.pagar(valor);
  }
}

module.exports = GatewayAdapter;