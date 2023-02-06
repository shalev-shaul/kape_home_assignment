import React from 'react';
import './ExpertRecommendations.scss';
import windowsReport from '../../assets/images/windows-report.png';
import softonic from '../../assets/images/softonic.png';
import safetyDetectives from '../../assets/images/safety-detectives.png';
import experts from '../../assets/images/experts.png';

const ExpertRecommendations = () => {
  let recommendations = [
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
  return (
    <section className='experts-recommendations-section'>
      <div className='container'>
        <div className='wrap-experts-recommendations '>
          <div className='wrap-experts-content'>
            <h1 className='experts-title'>What the experts are saying about Intego</h1>
            {recommendations.map((recommendation, i) => (
              <div key={`recommendation- + ${i}`} className='wrap-expert-comment'>
                <img src={recommendation.imgSrc} alt='' />
                <span className='expert-comment'>{recommendation.text}</span>
              </div>
            ))}
          </div>
          <div className='wrap-experts-image'>
            <img src={experts} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertRecommendations;
