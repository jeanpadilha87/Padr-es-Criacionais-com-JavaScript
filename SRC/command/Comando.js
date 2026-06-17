class Comando {
  executar() {
    throw new Error('Método executar() deve ser implementado.');
  }

  desfazer() {
    throw new Error('Método desfazer() deve ser implementado.');
  }
}

module.exports = Comando;