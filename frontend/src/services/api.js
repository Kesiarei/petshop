// api.js
const BASE_URL = 'http://localhost:3000'; // Altere conforme necessário

const api = {
  async getConsultas() {
    const response = await fetch(`${BASE_URL}/consultas`);
    return response.json();
  },

  async agendarConsulta(consultaData) {
    const response = await fetch(`${BASE_URL}/consultas`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(consultaData),
    });
    return response.json();
  },

  // Outros métodos para atualizar e filtrar consultas, conforme necessário
};

export default api;
