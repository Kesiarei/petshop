const express = require('express');
const router = express.Router();

// Rota para listar todos os pets
router.get('/', (req, res) => {
    res.send('Listagem de Pets');
});

// Rota para obter um pet específico
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Detalhes do Pet com o ID ${id}`);
});

// Rota para adicionar um novo pet
router.post('/', (req, res) => {
    // Lógica para adicionar um novo pet
    res.send('Adicionar um novo pet');
});

// Rota para atualizar os dados de um pet
router.put('/:id', (req, res) => {
    const { id } = req.params;
    // Lógica para atualizar os dados do pet com o ID fornecido
    res.send(`Atualizar o Pet com o ID ${id}`);
});

// Rota para excluir um pet
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    // Lógica para excluir o pet com o ID fornecido
    res.send(`Excluir o Pet com o ID ${id}`);
});

module.exports = router;
