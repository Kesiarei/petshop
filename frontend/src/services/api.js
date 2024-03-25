const BASE_URL = 'http://localhost:3000';

const api = {
  async getConsultas(filtros) {
    try {
      const response = await fetch(`${BASE_URL}/consultas?${filtros}`);
      return response.json();
    } catch (error) {
      throw new Error('Erro ao buscar as consultas');
    }
  },

  async agendarConsulta(consultaData) {
    try {
      const response = await fetch(`${BASE_URL}/consultas`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(consultaData),
      });
      return response.json();
    } catch (error) {
      throw new Error('Erro ao agendar a consulta');
    }
  },

  async atualizarStatusConsulta(consultaId, novoStatus) {
    try {
      const response = await fetch(`${BASE_URL}/consultas/${consultaId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ novoStatus }),
      });
      return response.json();
    } catch (error) {
      throw new Error('Erro ao atualizar o status da consulta');
    }
  },

  async filtrarConsultas(filtros) {
    try {
      const response = await fetch(`${BASE_URL}/consultas/filtrar?${filtros}`);
      return response.json();
    } catch (error) {
      throw new Error('Erro ao filtrar as consultas');
    }
  },
};

export default api;
