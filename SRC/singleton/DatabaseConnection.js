class DatabaseConnection {

  // variável estática que vai guardar
  // a única instância da classe
  static instance;

  constructor() {

    // impede criação de várias instâncias
    if (DatabaseConnection.instance) {
      return DatabaseConnection.instance;
    }

    console.log('Nova conexão criada.');

    DatabaseConnection.instance = this;
  }

  // método estático para acessar
  // sempre a mesma instância
  static getInstance() {

    // lazy initialization
    // só cria quando for necessário
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }

    return DatabaseConnection.instance;
  }
}

module.exports = DatabaseConnection;