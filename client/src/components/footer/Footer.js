import React from 'react';
import './Footer.scss';

import logo from '../../assets/images/intego_logo.png';

const Footer = () => {
  return (
    <footer className='wrap-footer-section'>
      <div className='container'>
        <div className='wrap-footer'>
          <img src={logo} alt='' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
