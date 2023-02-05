import React, { useEffect } from 'react';
import ProductItem from './helpers/price/ProductItem';
import './Products.scss';

export default function Products() {
  useEffect(() => {
    console.log('hey');
  }, []);

  var products = [
    {
      title: 'Essential Protection',
      price: 12,
      protections: [
        <>
          <strong>Powerful malware engine: </strong>
          <span>Adaptive, real-time malware engine monitors and eliminates threats before they reach your PC</span>,
        </>,
        <>
          <strong>Easy to use, easy on your PC: </strong>
          <span>Intuitive and simple UI with light, customizable scans</span>,
        </>,
        <>
          <strong>100% malware immunity: </strong>
          <span>Independent lab tests show that Intego eradicates 100% of malware</span>,
        </>,
        <>
          <strong>Ransomware protection: </strong>
          <span>Ransomware protection: Protects your personal data from being hacked and encrypted for a ransom</span>,
        </>,
      ],
    },
    {
      title: 'Advanced Protection',
      price: 12,
      protections: [
        <>
          <strong>Essential Protection Plan </strong>
        </>,
        <>
          <strong>Secure Wi-Fi protection: </strong>
          <span>Secure your connection when connected to public Wi-Fi or low security networks</span>,
        </>,
        <>
          <strong>Protect your Privacy: </strong>
          <span>Keep your personal data safe & private</span>,
        </>,
        <>
          <strong>Browse without boundaries: </strong>
          <span>Intego VPN opens up the web for streaming & browsing</span>,
        </>,
      ],
    },
    {
      title: 'Extended Protection',
      price: 12,
      protections: [
        <>
          <strong>Powerful malware engine: </strong>
          <span>Adaptive, real-time malware engine monitors and eliminates threats before they reach your PC</span>,
        </>,
        <>
          <strong>Easy to use, easy on your PC: </strong>
          <span>Intuitive and simple UI with light, customizable scans</span>,
        </>,
        <>
          <strong>100% malware immunity: </strong>
          <span>Independent lab tests show that Intego eradicates 100% of malware</span>,
        </>,
        <>
          <strong>Ransomware protection: </strong>
          <span>Ransomware protection: Protects your personal data from being hacked and encrypted for a ransom</span>,
        </>,
      ],
    },
  ];

  return (
    <section className='wrap-prices-section'>
      <div className='container'>
        <div className='wrap-prices'>
          {products.map((product) => {
            return (
              <ProductItem
                key={product.title}
                title={product.title}
                price={product.price}
                protections={product.protections}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
