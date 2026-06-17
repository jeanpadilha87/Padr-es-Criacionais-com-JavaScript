class GerenciadorComandos {
  constructor() {
    this.historico = [];
  }

  executar(comando) {
    comando.executar();

    this.historico.push(comando);
  }

  desfazer() {
    const comando = this.historico.pop();

    if (comando) {
      comando.desfazer();
    }
  }
}

module.exports = GerenciadorComandos;