import React, { Component } from 'react';

import './ExpertsTalking.scss';
import windowsReport from '../../assets/images/windows-report.png';
import softonic from '../../assets/images/softonic.png';
import safetyDetectives from '../../assets/images/safety-detectives.png';
import experts from '../../assets/images/experts.png';

export default class ExpertsTalking extends Component {
  paragraphs = [
    {
      imgSrc: windowsReport,
      text: '“Whether you have a high-end PC or a model that is several years old, Intego Antivirus will run smoothly on it and provide you with the best possible protection on the market”',
    },
    {
      imgSrc: softonic,
      text: '“It offers secure PC protection while running smoothly on your system, so this is an excellent recommendation for any type of user.”',
    },
    {
      imgSrc: safetyDetectives,
      text: '“Intego Antivirus for Windows comes from a company that’s famous for its Mac security products. Intego is intuitive, extremely easy to set up, and it won’t slow down your PC”',
    },
  ];
  render() {
    return (
      <section className='experts-talking-section'>
        <div className='container'>
          <div className='wrap-experts-talking '>
            <div className='wrap-experts-content'>
              <h1 className='experts-title'>What the experts are saying about Intego</h1>
              {this.paragraphs.map((paragrpah) => {
                return (
                  <div className='wrap-expert-comment'>
                    <img src={paragrpah.imgSrc} alt='' />
                    <span className='expert-comment'>{paragrpah.text}</span>
                  </div>
                );
              })}
            </div>
            <div className='wrap-experts-image'>
              <img src={experts} alt='' />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
