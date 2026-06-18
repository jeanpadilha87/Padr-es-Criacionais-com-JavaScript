// =========================
// Padrões criacionais, estruturais e comportamentais.
// JavaScript e Node.js
// =========================


// =========================
// Singleton-DatabaseConnection-instância
// =========================

const DatabaseConnection = require('./singleton/DatabaseConnection');

console.log('\n===== SINGLETON =====');

const conexao1 = DatabaseConnection.getInstance();
const conexao2 = DatabaseConnection.getInstance();

console.log(conexao1 === conexao2);

// =========================
// Factory Method-centralizar-formas de pagamento
// =========================

const PagamentoFactory = require('./factory/PagamentoFactory');

console.log('\n===== FACTORY METHOD =====');

const pagamentoPix = PagamentoFactory.criarPagamento('pix');
pagamentoPix.processar(150);

const pagamentoBoleto = PagamentoFactory.criarPagamento('boleto');
pagamentoBoleto.processar(300);

const pagamentoCartao = PagamentoFactory.criarPagamento('cartao');
pagamentoCartao.processar(500);

// =========================
// Builder-Construtor de Objetos
// =========================

const PedidoBuilder = require('./builder/PedidoBuilder');

console.log('\n===== BUILDER =====');

const pedido = new PedidoBuilder()
  .adicionarItem('Mouse Gamer')
  .adicionarItem('Teclado Mecânico')
  .setEndereco('Rua das Flores, 123')
  .setPagamento('PIX')
  .build();

console.log(pedido);

// =========================
// Adapter adapta e traduz o pagamento
// =========================

const GatewayAdapter = require('./adapter/GatewayAdapter');

console.log('\n===== ADAPTER =====');

const gateway = new GatewayAdapter();

gateway.processar(250);

// =========================
// Decorator-funcionalidades extras-
// =========================

const Pix = require('./factory/Pix');

const LogDecorator = require('./decorator/LogDecorator');
const DescontoDecorator = require('./decorator/DescontoDecorator');

console.log('\n===== DECORATOR =====');

const pagamentoDecorado = new LogDecorator(
  new DescontoDecorator(
    new Pix(),
    10
  )
);

pagamentoDecorado.processar(200);

// =========================
// Facade-Simplifcar finalização do pedido
// =========================

const CheckoutFacade = require('./facade/CheckoutFacade');

console.log('\n===== FACADE =====');

const checkout = new CheckoutFacade();

checkout.finalizar(pedido);

// =========================
// Strategy - estratégias de cálculo de frete
// =========================

const Carrinho = require('./strategy/Carrinho');

const FreteCorreios = require('./strategy/FreteCorreios');
const FreteJadlog = require('./strategy/FreteJadlog');
const FreteRetirada = require('./strategy/FreteRetirada');

console.log('\n===== STRATEGY =====');

const carrinho = new Carrinho(new FreteCorreios());

console.log(
  `Correios: R$ ${carrinho.calcularFrete(5)}`
);

carrinho.setFrete(new FreteJadlog());

console.log(
  `Jadlog: R$ ${carrinho.calcularFrete(5)}`
);

carrinho.setFrete(new FreteRetirada());

console.log(
  `Retirada: R$ ${carrinho.calcularFrete(5)}`
);

// =========================
// Observer - notificações de status do pedido
// =========================

const EmailObserver = require('./observer/EmailObserver');
const EstoqueObserver = require('./observer/EstoqueObserver');
const LogObserver = require('./observer/LogObserver');

console.log('\n===== OBSERVER =====');

pedido.adicionarObserver(new EmailObserver());
pedido.adicionarObserver(new EstoqueObserver());
pedido.adicionarObserver(new LogObserver());

pedido.confirmar();

// =========================
// Command - ações como objetos, desfazer e refazer
// =========================

const CancelarPedidoComando = require('./command/CancelarPedidoComando');
const GerenciadorComandos = require('./command/GerenciadorComandos');

console.log('\n===== COMMAND =====');

const gerenciador = new GerenciadorComandos();

const cancelarPedido = new CancelarPedidoComando(pedido);

gerenciador.executar(cancelarPedido);

console.log(`Status atual: ${pedido.status}`);

gerenciador.desfazer();

console.log(`Status atual: ${pedido.status}`);