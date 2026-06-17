class Carrinho {
  constructor(estrategiaFrete) {
    this.estrategiaFrete = estrategiaFrete;
  }

  setFrete(estrategiaFrete) {
    this.estrategiaFrete = estrategiaFrete;
  }

  calcularFrete(peso) {
    return this.estrategiaFrete.calcular(peso);
  }
}

module.exports = Carrinho;