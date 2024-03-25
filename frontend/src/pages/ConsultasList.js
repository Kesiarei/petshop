// ConsultasList.js
import React, { useEffect, useState } from 'react';
import api from '../services/api';

const ConsultasList = () => {
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
    async function fetchConsultas() {
      const consultasData = await api.getConsultas();
      setConsultas(consultasData);
    }
    fetchConsultas();
  }, []);

  return (
    <div>
      <h2>Consultas Agendadas</h2>
      <ul>
        {consultas.map((consulta) => (
          <li key={consulta.id}>
            {/* Exibir detalhes da consulta */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConsultasList;
