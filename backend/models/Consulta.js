const { Sequelize, DataTypes } = require('sequelize');

// Criar uma nova instância do Sequelize
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: '/home/kesia/desafio_database.db' 
});

// Definir o modelo Consulta
const Consulta = sequelize.define('Consulta', {
  // Definir os campos da tabela Consulta
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  // Outros campos da consulta
});

// Sincronizar o modelo com o banco de dados
(async () => {
  try {
    await sequelize.sync();
    console.log('Modelo Consulta sincronizado com o banco de dados');
  } catch (error) {
    console.error('Erro ao sincronizar modelo com o banco de dados:', error);
  }
})();

module.exports = Consulta;
