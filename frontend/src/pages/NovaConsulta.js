// NovaConsulta.js
import React from 'react';
import Form from '../components/Form';
import api from '../services/api';

const NovaConsulta = () => {
  const handleSubmit = async () => {
    // Lógica para enviar os dados do formulário para o backend
    const consultaData = {
      // Dados do formulário
    };
    await api.agendarConsulta(consultaData);
    // Lógica para redirecionar ou atualizar a lista de consultas
  };

  return (
    <div>
      <h2>Agendar Nova Consulta</h2>
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

export default NovaConsulta;
