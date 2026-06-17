const EstrategiaFrete = require('./EstrategiaFrete');

class FreteCorreios extends EstrategiaFrete {
  calcular(peso) {
    return peso * 10;
  }
}

module.exports = FreteCorreios;