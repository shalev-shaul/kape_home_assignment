import React, { Component } from 'react';
import Price from './helpers/price/Price';

export default class Prices extends Component {
  prices = [
    {
      title: 'Essential Protection',
      price: 12,
      protections: [
        <React.Fragment>
          <strong>Powerful malware engine: </strong>
          <span>Adaptive, real-time malware engine monitors and eliminates threats before they reach your PC</span>,
        </React.Fragment>,
        <React.Fragment>
          <strong>Easy to use, easy on your PC: </strong>
          <span>Intuitive and simple UI with light, customizable scans</span>,
        </React.Fragment>,
        <React.Fragment>
          <strong>100% malware immunity: </strong>
          <span>Independent lab tests show that Intego eradicates 100% of malware</span>,
        </React.Fragment>,
        <React.Fragment>
          <strong>Ransomware protection: </strong>
          <span>Ransomware protection: Protects your personal data from being hacked and encrypted for a ransom</span>,
        </React.Fragment>,
      ],
    },
    {
      title: 'Advanced Protection',
      price: 12,
      protections: [
        <React.Fragment>
          <strong>Essential Protection Plan </strong>
        </React.Fragment>,
        <React.Fragment>
          <strong>Secure Wi-Fi protection: </strong>
          <span>Secure your connection when connected to public Wi-Fi or low security networks</span>,
        </React.Fragment>,
        <React.Fragment>
          <strong>Protect your Privacy: </strong>
          <span>Keep your personal data safe & private</span>,
        </React.Fragment>,
        <React.Fragment>
          <strong>Browse without boundaries: </strong>
          <span>Intego VPN opens up the web for streaming & browsing</span>,
        </React.Fragment>,
      ],
    },
    {
      title: 'Extended Protection',
      price: 12,
      protections: [
        <React.Fragment>
          <strong>Powerful malware engine: </strong>
          <span>Adaptive, real-time malware engine monitors and eliminates threats before they reach your PC</span>,
        </React.Fragment>,
        <React.Fragment>
          <strong>Easy to use, easy on your PC: </strong>
          <span>Intuitive and simple UI with light, customizable scans</span>,
        </React.Fragment>,
        <React.Fragment>
          <strong>100% malware immunity: </strong>
          <span>Independent lab tests show that Intego eradicates 100% of malware</span>,
        </React.Fragment>,
        <React.Fragment>
          <strong>Ransomware protection: </strong>
          <span>Ransomware protection: Protects your personal data from being hacked and encrypted for a ransom</span>,
        </React.Fragment>,
      ],
    },
  ];
  render() {
    return (
      <section className='wrap-prices-section'>
        <div className='container'>
          <div className='d-flex justify-content-between'>
            {this.prices.map((price) => {
              return <Price title={price.title} price={price.price} protections={price.protections} />;
            })}
          </div>
        </div>
      </section>
    );
  }
}
