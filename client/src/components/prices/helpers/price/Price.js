import React from 'react';
import './Price.scss';
import antivirus from '../../../../assets/images/antivirus.png';
import dollarIcon from '../../../../assets/images/dollar-icon.png';
import checkIcon from '../../../../assets/images/check-icon.png';

export default function Price(props) {
  return (
    <div className='wrap-price'>
      <div className='wrap-image'>
        <div className='position-relative'>
          <img src={antivirus} alt='antivirus' />
          <div className='wrap-discount'>
            <span className='discount'>60%</span>
            <span className='discount-small'>Discount</span>
          </div>
        </div>
      </div>

      <div className='wrap-title'>
        <span className='price-title'>{props.title}</span>
        <span className='price-subtitle'>Windows PC Antivirus</span>
      </div>

      <div className='wrap-price-content'>
        <span className='price-per-month'>Only $1.67/month</span>
        <span className='small-price-content'>
          Billed <strong>$19.99</strong> <span className='text-line-through'>$49.99</span> for the first 1 year
        </span>

        <button className='buy-now'>Buy Now</button>
        <span className='money-back'>
          <img className='mr-1' src={dollarIcon} alt='dollar-icon' /> 30-day money back guarantee
        </span>

        <div className='hr' style={{ width: '90%', marginBottom: '30px' }}></div>
      </div>

      <div className='wrap-protection'>
        <span className='protection-title'>{props.title} includes:</span>

        {props.protections.map((protection) => {
          return (
            <div className='protection-row'>
              <img className='mr-1' src={checkIcon} alt='Check Icon' />
              <span className='protection-content'>{protection}</span>
            </div>
          );
        })}
      </div>

      <span className='first-payment'>Discount applicable for the first payment only</span>
    </div>
  );
}
