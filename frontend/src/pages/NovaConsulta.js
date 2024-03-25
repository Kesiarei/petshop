import React, { useState } from 'react';
import Form from '../components/Form';
import api from '../services/api';

const NovaConsulta = () => {
  const [formData, setFormData] = useState({
    pet: '',
    cliente: '',
    horario: '',
    status: 'Agendada',
  });

  const handleSubmit = async () => {
    try {
      // Enviar os dados do formulário para o backend
      await api.agendarConsulta(formData);
      console.log('Consulta agendada com sucesso!');
    } catch (error) {
      console.error('Erro ao agendar a consulta:', error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Agendar Nova Consulta</h2>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="pet">Pet:</label>
        <input type="text" id="pet" name="pet" value={formData.pet} onChange={handleChange} />

        <label htmlFor="cliente">Cliente:</label>
        <input
          type="text"
          id="cliente"
          name="cliente"
          value={formData.cliente}
          onChange={handleChange}
        />

        <label htmlFor="horario">Horário:</label>
        <input
          type="datetime-local"
          id="horario"
          name="horario"
          value={formData.horario}
          onChange={handleChange}
        />
      </Form>
    </div>
  );
};

export default NovaConsulta;
