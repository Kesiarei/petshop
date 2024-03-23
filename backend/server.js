const express = require('express');
const connectDatabase = require('./config/database');
const consultaRoutes = require('./routes/consultaRoutes');
const petRoutes = require('./routes/petRoutes');
const clienteRoutes = require('./routes/clienteRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para processar corpos de requisição JSON
app.use(express.json());

// Conectar ao banco de dados
connectDatabase();

// Rotas para consultas, pets e clientes
app.use('/consultas', consultaRoutes);
app.use('/pets', petRoutes);
app.use('/clientes', clienteRoutes);

// Rota de teste
app.get('/', (req, res) => {
    res.send('Servidor está rodando!');
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
