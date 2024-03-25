const Consulta = require('../models/Consulta');

// Listar todas as consultas
exports.listConsultas = async (req, res) => {
  try {
    const consultas = await Consulta.findAll();
    res.json(consultas);
  } catch (error) {
    console.error('Erro ao buscar as consultas:', error);
    res.status(500).json({ message: 'Erro ao buscar as consultas' });
  }
};

// Agendar uma nova consulta
exports.agendarConsulta = async (req, res) => {
  const { pet, cliente, horario, status } = req.body;
  try {
    const novaConsulta = await Consulta.create({ pet, cliente, horario, status });
    res.status(201).json(novaConsulta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao agendar a consulta' });
  }
};

// Atualizar o status de uma consulta
exports.atualizarStatusConsulta = async (req, res) => {
  const { consultaId } = req.params;
  const { novoStatus } = req.body;
  try {
    const consulta = await Consulta.findByPk(consultaId);
    if (!consulta) {
      return res.status(404).json({ message: 'Consulta não encontrada' });
    }
    consulta.status = novoStatus;
    await consulta.save();
    res.json(consulta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao atualizar o status da consulta' });
  }
};

// Filtrar consultas
exports.filtrarConsultas = async (req, res) => {
  const { status, data } = req.query;
  try {
    let consultas = await Consulta.findAll();
    if (status) {
      consultas = consultas.filter(consulta => consulta.status === status);
    }
    if (data) {
      // Lógica para filtrar por data, se necessário
    }
    res.json(consultas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao filtrar as consultas' });
  }
};
