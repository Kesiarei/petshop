// Middleware para autenticação de usuários, se necessário
const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
  // Lógica de autenticação
};

module.exports = { authenticateUser };
