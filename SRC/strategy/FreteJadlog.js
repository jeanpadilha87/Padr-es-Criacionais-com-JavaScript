const EstrategiaFrete = require('./EstrategiaFrete');

class FreteJadlog extends EstrategiaFrete {
  calcular(peso) {
    return peso * 8;
  }
}

module.exports = FreteJadlog;