Laboratório - Padrões Criacionais

Aluno: Jean Padilha

Projeto desenvolvido para praticar padrões criacionais utilizando JavaScript.

O sistema simula partes de um e-commerce:

conexão com banco de dados
sistema de pagamentos
montagem de pedidos
Singleton na classe DatabaseConnection (Garantir que exista apenas uma instância da conexão) Justificativa: O padrão Singleton foi utilizado para evitar múltiplas conexões desnecessárias com o banco de dados. Com isso, o sistema reutiliza a mesma instância durante toda a execução, economizando recursos e melhorando a organização da aplicação. Também foi utilizada Lazy Initialization, onde a instância é criada apenas na primeira chamada do método getInstance().

Factory Method na classe PagamentoFactory (Centralizar a criação das formas de pagamento)

PIX
Boleto
Cartão de Crédito O padrão Factory Method foi utilizado para desacoplar a criação dos objetos do restante do sistema. Dessa forma, o código principal não precisa conhecer diretamente as classes concretas de pagamento. Se futuramente for necessário adicionar uma nova forma de pagamento, como criptomoeda, basta criar uma nova classe e adicioná-la na fábrica, sem alterar o restante do sistema. Isso torna o projeto mais organizado, flexível e fácil de manter.
Builder na Classe PedidoBuilder (Construir objetos do tipo Pedido de forma organizada e fluente)

adicionar itens
definir endereço
definir forma de pagamento
validar pedido antes da criação O padrão Builder foi utilizado para facilitar a criação de objetos complexos. Sem o Builder, seria necessário utilizar um construtor com muitos parâmetros, deixando o código mais difícil de ler e manter. Com o Builder, o objeto é montado passo a passo, utilizando Fluent Interface, tornando o código mais legível, organizado e permitindo validações antes da criação final do pedido.
Como executar:

node src/app.js

Resultado esperado:

Nova conexão criada. true

Pagamento via PIX realizado: R$ 150 Pagamento via boleto realizado: R$ 300 Pagamento via cartão de crédito realizado: R$ 500

Pedido { itens: [ 'Mouse Gamer', 'Teclado Mecânico' ], endereco: 'Rua das Flores, 123', pagamento: 'PIX' }
