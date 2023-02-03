import React, { Component } from 'react';
import './Footer.scss';

import logo from '../../assets/images/intego_logo.png';

export default class Footer extends Component {
  render() {
    return (
      <footer className='wrap-footer-section'>
        <div className='container'>
          <div className='wrap-footer'>
            <img src={logo} alt='' />
          </div>
        </div>
      </footer>
    );
  }
}