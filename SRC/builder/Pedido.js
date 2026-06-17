class Pedido {
  constructor(itens, endereco, pagamento) {
    this.id = Date.now();

    this.itens = itens;
    this.endereco = endereco;
    this.pagamento = pagamento;

    this.status = 'PENDENTE';

    this.observers = [];
  }

  adicionarObserver(observer) {
    this.observers.push(observer);
  }

  notificar() {
    this.observers.forEach(observer =>
      observer.atualizar(this)
    );
  }

  confirmar() {
    this.status = 'CONFIRMADO';

    console.log('Pedido confirmado.');

    this.notificar();
  }
}

module.exports = Pedido;