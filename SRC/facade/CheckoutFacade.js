const EstoqueService = require('./EstoqueService');
const PagamentoService = require('./PagamentoService');
const CarrinhoService = require('./CarrinhoService');
const EmailService = require('./EmailService');

class CheckoutFacade {
  constructor() {
    this.estoque = new EstoqueService();
    this.pagamento = new PagamentoService();
    this.carrinho = new CarrinhoService();
    this.email = new EmailService();
  }

  finalizar(pedido) {
    console.log('\nFinalizando pedido...');

    this.estoque.verificar();
    this.pagamento.processar();
    this.carrinho.limpar();
    this.email.enviar();

    console.log('Pedido finalizado.');
  }
}

module.exports = CheckoutFacade;