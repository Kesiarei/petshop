import React, { useEffect, useState } from 'react';
import api from '../services/api';

const ConsultasList = () => {
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
    async function fetchConsultas() {
      try {
        const consultasData = await api.getConsultas();
        setConsultas(consultasData);
      } catch (error) {
        console.error('Erro ao buscar as consultas:', error.message);
      }
    }
    fetchConsultas();
  }, []);

  return (
    <div>
      <h2>Consultas Agendadas</h2>
      <ul>
        {consultas.map((consulta) => (
          <li key={consulta.id}>
            <h3>Consulta #{consulta.id}</h3>
            <p><strong>Pet:</strong> {consulta.pet}</p>
            <p><strong>Cliente:</strong> {consulta.cliente}</p>
            <p><strong>Horário:</strong> {consulta.horario}</p>
            <p><strong>Status:</strong> {consulta.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConsultasList;
