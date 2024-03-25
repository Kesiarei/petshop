const jwt = require('jsonwebtoken');
const { User } = require('../models'); 

const authenticateUser = (req, res, next) => {
  // Obtenha o token de autorização do cabeçalho da solicitação
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: 'Token de autorização não fornecido' });
  }

  // Verifique se o token está no formato correto
  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Token de autorização inválido' });
  }

  // Verifique se o token é válido e decodifique as informações do usuário
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET); // Certifique-se de definir a variável de ambiente JWT_SECRET
    req.user = decodedToken.user; // Anexa as informações do usuário decodificado ao objeto de solicitação
    next(); // Avança para o próximo middleware ou rota
  } catch (error) {
    return res.status(401).json({ message: 'Token de autorização inválido' });
  }
};

module.exports = { authenticateUser };
