import './App.scss';
import Header from '../header/Header';
import React from 'react';
import Brand from '../brand/Brand';
import Prices from '../prices/Prices';
import AvReport from '../av_report/AvReport';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Brand />
      <Prices />
      <AvReport />
    </React.Fragment>
  );
}

export default App;
