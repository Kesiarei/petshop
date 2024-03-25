import React from 'react';

const Footer = ({ companyName }) => {
  return (
    <footer>
      <p>© {new Date().getFullYear()} {companyName}. Todos os direitos reservados.</p>
    </footer>
  );
};

Footer.defaultProps = {
  companyName: 'Meu Pet Shop'
};

export default Footer;
