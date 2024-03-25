// Form.js
import React from 'react';

const Form = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Inputs e campos do formulário */}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
