import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Inputs e campos do formulário */}
      <input type="text" name="pet" placeholder="Nome do Pet" onChange={handleChange} required />
      <input type="text" name="cliente" placeholder="Nome do Cliente" onChange={handleChange} required />
      <input type="datetime-local" name="horario" onChange={handleChange} required />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
