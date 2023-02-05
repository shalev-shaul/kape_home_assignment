import React from 'react';
import './AvReport.scss';
import virus100 from '../../assets/images/virus-100.png';
import excellent from '../../assets/images/excellent.png';
import top2016 from '../../assets/images/top-2016.png';
import top2016_2 from '../../assets/images/top-2016-2.png';
import windows from '../../assets/images/windows.png';
import topRightBackground from '../../assets/images/top-right-background.png';
import bottomLeftBackground from '../../assets/images/bottom-left-background.png';

export default function AvReport() {
  let awardsImages = [windows, top2016_2, top2016, excellent, virus100];
  return (
    <section className='wrap-av-report-section'>
      <div className='container wrap-av-report'>
        <h2 className='av-report-title'>Virus Bulletin intego AV Report</h2>

        <div className='wrap-awards'>
          <div className='top-right-background'>
            <img src={topRightBackground} alt='' />
          </div>
          <div className='bottom-left-background'>
            <img src={bottomLeftBackground} alt='' />
          </div>

          <div className='awards'>
            <h5 className='award'>Awards</h5>
            <div className='awards-images'>
              {awardsImages.map((imgSrc, i) => {
                return <img key={'av-image' + i} src={imgSrc} alt='' />;
              })}
            </div>
          </div>

          <div className='wrap-test-result'>
            <h5 className='test-result-title'>VB Detailed Test Results</h5>
            <div className='d-flex justify-content-between'>
              <div className='wrap-performance'>
                <span className='performance'>Performance</span>
                <span className='performance-percentage'>100%</span>
              </div>
              <div className='separate'></div>
              <div className='wrap-protection'>
                <span className='protection'>Protection</span>
                <span className='protection-percentage'>100%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
