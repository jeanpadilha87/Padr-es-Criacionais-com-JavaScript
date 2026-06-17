Laboratório - Padrões Criacionais, Estruturais e Comportamentais

- Aluno: Jean Padilha
- Aluno: Lucas Rumph Nascimento

Projeto desenvolvido para praticar padrões de projeto utilizando JavaScript.

O sistema simula partes de um e-commerce:

* conexão com banco de dados
* sistema de pagamentos
* montagem de pedidos
* integração com gateway legado
* cálculo de frete
* notificações automáticas
* finalização de pedidos

Singleton na classe DatabaseConnection (Garantir que exista apenas uma instância da conexão)

Justificativa: O padrão Singleton foi utilizado para evitar múltiplas conexões desnecessárias com o banco de dados. Com isso, o sistema reutiliza a mesma instância durante toda a execução, economizando recursos e melhorando a organização da aplicação. Também foi utilizada Lazy Initialization, onde a instância é criada apenas na primeira chamada do método getInstance().

Factory Method na classe PagamentoFactory (Centralizar a criação das formas de pagamento)

* PIX
* Boleto
* Cartão de Crédito

Justificativa: O padrão Factory Method foi utilizado para desacoplar a criação dos objetos do restante do sistema. Dessa forma, o código principal não precisa conhecer diretamente as classes concretas de pagamento. Se futuramente for necessário adicionar uma nova forma de pagamento, como criptomoeda, basta criar uma nova classe e adicioná-la na fábrica, sem alterar o restante do sistema. Isso torna o projeto mais organizado, flexível e fácil de manter.

Builder na classe PedidoBuilder (Construir objetos do tipo Pedido de forma organizada e fluente)

* adicionar itens
* definir endereço
* definir forma de pagamento
* validar pedido antes da criação

Justificativa: O padrão Builder foi utilizado para facilitar a criação de objetos complexos. Sem o Builder, seria necessário utilizar um construtor com muitos parâmetros, deixando o código mais difícil de ler e manter. Com o Builder, o objeto é montado passo a passo, utilizando Fluent Interface, tornando o código mais legível, organizado e permitindo validações antes da criação final do pedido.

Adapter na classe GatewayAdapter (Adaptar o gateway legado para o contrato de pagamento do sistema)

Justificativa: O padrão Adapter foi utilizado para integrar um gateway de pagamento legado sem alterar o código existente. O restante do sistema continua utilizando o método processar(), enquanto o adapter traduz a chamada para o método pagar() do gateway legado. Isso permite reutilizar código existente e respeita o princípio Open/Closed.

Decorator nas classes LogDecorator e DescontoDecorator (Adicionar funcionalidades extras ao pagamento)

* registrar log da transação
* aplicar desconto percentual
* combinar comportamentos dinamicamente

Justificativa: O padrão Decorator foi utilizado para adicionar funcionalidades sem modificar as classes de pagamento existentes. Novos comportamentos podem ser adicionados facilmente, como envio de SMS ou geração de relatórios, apenas criando novos decorators. Essa abordagem é mais flexível do que utilizar herança.

Facade na classe CheckoutFacade (Simplificar a finalização do pedido)

* verificar estoque
* processar pagamento
* limpar carrinho
* enviar e-mail

Justificativa: O padrão Facade foi utilizado para centralizar a comunicação entre vários subsistemas. O controller precisa interagir apenas com a fachada, sem conhecer detalhes internos. Isso reduz o acoplamento e protege o código cliente contra mudanças nos serviços internos.

Strategy na classe Carrinho (Permitir diferentes estratégias de cálculo de frete)

* Correios
* Jadlog
* Retirada

Justificativa: O padrão Strategy foi utilizado para permitir a troca do algoritmo de cálculo de frete em tempo de execução. Novas transportadoras podem ser adicionadas sem alterar a classe Carrinho, respeitando o princípio Open/Closed.

Observer na classe Pedido (Notificar automaticamente outros serviços)

* envio de e-mail
* atualização de estoque
* registro em log

Justificativa: O padrão Observer foi utilizado para desacoplar o pedido dos serviços que precisam ser notificados após sua confirmação. Novos observadores, como SMS ou WhatsApp, podem ser adicionados sem modificar a classe Pedido.

Command nas classes CancelarPedidoComando e GerenciadorComandos (Executar e desfazer ações)

* cancelar pedido
* desfazer cancelamento
* manter histórico de ações

Justificativa: O padrão Command foi utilizado para encapsular ações como objetos independentes. Isso permite desfazer operações, manter histórico de comandos e futuramente implementar filas de processamento assíncrono.

Como executar:

node src/app.js

Resultado esperado:

===== SINGLETON =====

Nova conexão criada.
true

===== FACTORY METHOD =====

Pagamento via PIX realizado: R$ 150
Pagamento via boleto realizado: R$ 300
Pagamento via cartão de crédito realizado: R$ 500

===== BUILDER =====

Pedido criado com sucesso.

===== ADAPTER =====

Gateway legado processou R$ 250

===== DECORATOR =====

[LOG] Valor cobrado: R$ 200
Desconto de 10% aplicado. Novo valor: R$ 180

===== FACADE =====

Pedido finalizado.

===== STRATEGY =====

Correios: R$ 50
Jadlog: R$ 40
Retirada: R$ 0

===== OBSERVER =====

Pedido confirmado e notificações enviadas.

===== COMMAND =====

Pedido cancelado.
Cancelamento desfeito.
