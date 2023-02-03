import React, { Component } from 'react';
import './Features.scss';
import featureSafety from '../../assets/images/feature-safety.png';
import featureProtection from '../../assets/images/features-protection.png';

export default class Features extends Component {
  features = [
    {
      imgSrc: featureProtection,
      title: '24/7 PC Protection',
      content:
        'Using the latest technology, malware engine and behavior analysis, Intego will protect your system around the clock to block Malware, Spyware, Adware, Ransomware and other threats - before they attack.',
    },
    {
      imgSrc: featureSafety,
      title: 'Safely Browse and Shop Online',
      content:
        'You and your family will be protected from online dangers with Intego Web Shield. Phishing attacks, fake websites, and other malware will be blocked quickly so that your PC remains safe at all times.',
    },
  ];
  render() {
    return (
      <section className='wrap-features-section'>
        <div className='container wrap-features'>
          {this.features.map((feature) => {
            return (
              <div className='warp-feature'>
                <div className='wrap-image'>
                  <img src={feature.imgSrc} alt='' />
                </div>
                <div className='wrap-content'>
                  <div className='wrap-content-info'>
                    <span className='title'>{feature.title}</span>
                    <span className='content'>{feature.content}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}
