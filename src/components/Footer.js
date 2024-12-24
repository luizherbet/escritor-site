import React, { memo } from 'react';
import Typing from './Typing';

const Footer = memo(() => {
  return (
    <footer className="bg-gray-900 text-white py-3 w-full">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; 2024 Luiz Herbet - Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
});

export default Footer;
