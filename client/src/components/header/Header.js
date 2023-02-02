import React, { Component } from 'react';
import './Header.scss';
import logo from '../../assets/images/intego_logo.png';
import starIcon from '../../assets/images/star-icon.png';
import starsList from '../../assets/images/stars-list.png';
export default class Header extends Component {
  render() {
    return (
      <section className='wrap-header'>
        <div className='container'>
          <div className='d-flex justify-content-between align-items-center'>
            <div>
              <img src={logo} alt='React Logo' />
            </div>

            <div className='wrap-trust-pilot'>
              <div className='d-flex align-items-center'>
                <img src={starIcon} alt='Star Icon' />
                <span className='trust-pilot'>Trustpilot</span>
              </div>
              <span className='customers-rates-us'>Customer rate us</span>
              <div className='d-flex align-items-center'>
                <span className='excellent'>Excellent</span>
                <img src={starsList} alt='Stars List' />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
