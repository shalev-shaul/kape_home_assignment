import React from 'react';
import './ProductItem.scss';
import antivirus from '../../../../assets/images/antivirus.png';
import bundleProductsImage from '../../../../assets/images/bundle-products.png';
import dollarIcon from '../../../../assets/images/dollar-icon.png';
import checkIcon from '../../../../assets/images/check-icon.png';
import ActionsService from '../../../../services/ActionsService';

const ProductItem = (props) => {
  const bundleTitles = {
    essential: 'Essential Protection',
    advanced: 'Advanced Protection',
    extended: 'Extended Protection',
  };

  const bundlesProtections = {
    essential: [
      {
        isMarked: false,
        content: (
          <>
            <strong>Powerful malware engine: </strong>
            <span>Adaptive, real-time malware engine monitors and eliminates threats before they reach your PC</span>,
          </>
        ),
      },
      {
        isMarked: false,
        content: (
          <>
            <strong>Easy to use, easy on your PC: </strong>
            <span>Intuitive and simple UI with light, customizable scans</span>,
          </>
        ),
      },
      {
        isMarked: false,
        content: (
          <>
            <strong>100% malware immunity: </strong>
            <span>Independent lab tests show that Intego eradicates 100% of malware</span>,
          </>
        ),
      },
      {
        isMarked: false,
        content: (
          <>
            <strong>Ransomware protection: </strong>
            <span>Ransomware protection: Protects your personal data from being hacked and encrypted for a ransom</span>
            ,
          </>
        ),
      },
    ],
    advanced: [
      {
        isMarked: true,
        content: (
          <>
            <strong>Essential Protection Plan </strong>
          </>
        ),
      },
      {
        isMarked: false,
        content: (
          <>
            <strong>Secure Wi-Fi protection: </strong>
            <span>Secure your connection when connected to public Wi-Fi or low security networks</span>,
          </>
        ),
      },
      {
        isMarked: false,
        content: (
          <>
            <strong>Protect your Privacy: </strong>
            <span>Keep your personal data safe & private</span>,
          </>
        ),
      },
      {
        isMarked: false,
        content: (
          <>
            <strong>Browse without boundaries: </strong>
            <span>Intego VPN opens up the web for streaming & browsing</span>,
          </>
        ),
      },
    ],
    extended: [
      {
        isMarked: false,
        content: (
          <>
            <strong className='notice-text'>Get {props.productPricingInfo.discountPercentage}% OFF!</strong>
          </>
        ),
      },
      {
        isMarked: false,
        content: (
          <>
            <strong>2 years protection</strong>
          </>
        ),
      },
      {
        isMarked: true,
        content: (
          <>
            <strong>Essential Protection Plan</strong>
          </>
        ),
      },
      {
        isMarked: true,
        content: (
          <>
            <strong>Advanced Protection Plan</strong>,
          </>
        ),
      },
    ],
  };

  const bundleImage = {
    essential: antivirus,
    advanced: antivirus,
    extended: bundleProductsImage,
  };

  const userClickOnButtonAction = () => {
    ActionsService.createAction('User click on button.');
  };

  return (
    <div className='wrap-price'>
      <div className='wrap-image'>
        <div className='position-relative'>
          <img src={bundleImage[props.bundleName]} alt='antivirus' />
          {props.bundleName === 'extended' && (
            <div className='best-value'>
              <span>Best Value</span>
            </div>
          )}
          <div className='wrap-discount'>
            <span className='discount'>{props.productPricingInfo.discountPercentage}%</span>
            <span className='discount-small'>Discount</span>
          </div>
        </div>
      </div>

      <div className='wrap-title'>
        <span className='price-title'>{bundleTitles[props.bundleName]}</span>
        <span className='price-subtitle'>Windows PC Antivirus</span>
      </div>

      <div className='wrap-price-content'>
        <span className='price-per-month'>Only {props.productPricingInfo.pricesFormat.monthlyPrice}/month</span>
        <span className='small-price-content'>
          Billed <strong>{props.productPricingInfo.pricesFormat.discountPrice}</strong>{' '}
          <span className='content-line-through'>{props.productPricingInfo.pricesFormat.originalPrice}</span> for the
          first 1 year
        </span>

        <button
          onClick={userClickOnButtonAction}
          className={'buy-now ' + (props.bundleName === 'extended' ? 'buy-now-gold' : '')}>
          Buy Now
        </button>
        <span className='money-back'>
          <img className='mr-1' src={dollarIcon} alt='dollar-icon' /> 30-day money back guarantee
        </span>

        <div className='hr' style={{ width: '90%', marginBottom: '30px' }}></div>
      </div>

      <div className='wrap-protection'>
        <span className='protection-title'>{bundleTitles[props.bundleName]} includes:</span>

        {bundlesProtections[props.bundleName]?.map((protection, i) => (
          <div key={`protection-${i}`} className={'protection-row ' + (protection.isMarked ? 'is-mark' : '')}>
            <img className='check-img' src={checkIcon} alt='Check Icon' />
            <span className='protection-content'>{protection.content}</span>
          </div>
        ))}
      </div>

      <span className='first-payment'>Discount applicable for the first payment only</span>
    </div>
  );
};

export default ProductItem;
