import './App.scss';
import Header from '../header/Header';
import React from 'react';
import Brand from '../brand/Brand';
import Prices from '../prices/Prices';
import AvReport from '../av_report/AvReport';
import ExpertsTalking from '../experts_talking/ExpertsTalking';
import Features from '../features/Features';
import Faq from '../faq/Faq';
import Footer from '../footer/Footer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Brand />
      <Prices />
      <AvReport />
      <ExpertsTalking />
      <Features />
      <Faq />
      <Footer />
    </React.Fragment>
  );
}

export default App;
