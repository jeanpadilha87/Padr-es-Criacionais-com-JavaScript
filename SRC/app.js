const DatabaseConnection = require('./singleton/DatabaseConnection');

const conexao1 = DatabaseConnection.getInstance();
const conexao2 = DatabaseConnection.getInstance();

console.log(conexao1 === conexao2);

const PagamentoFactory = require('./factory/PagamentoFactory');

const pagamentoPix = PagamentoFactory.criarPagamento('pix');
pagamentoPix.processar(150);

const pagamentoBoleto = PagamentoFactory.criarPagamento('boleto');
pagamentoBoleto.processar(300);

const pagamentoCartao = PagamentoFactory.criarPagamento('cartao');
pagamentoCartao.processar(500);


const PedidoBuilder = require('./builder/PedidoBuilder');

const pedido = new PedidoBuilder()
  .adicionarItem('Mouse Gamer')
  .adicionarItem('Teclado Mecânico')
  .setEndereco('Rua das Flores, 123')
  .setPagamento('PIX')
  .build();

console.log(pedido);