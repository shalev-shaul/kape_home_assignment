import React, { Component } from 'react';
import './Brand.scss';
export default class Brand extends Component {
  render() {
    return (
      <section className='wrap-brand-section'>
        <div className='content'>
          <div className='container'>
            <h1 className='brand-title'>Get the Ultimate Protection for your PC</h1>
            <h5 className='brand-subtitle'>Choose the best plan for your needs</h5>
          </div>
        </div>
      </section>
    );
  }
}
