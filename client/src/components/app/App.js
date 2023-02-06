import './App.scss';
import Header from '../header/Header';
import React, { useEffect } from 'react';
import AvReport from '../av_report/AvReport';
import Faq from '../faq/Faq';
import Footer from '../footer/Footer';
import Products from '../products/Products';
import Introduction from '../introduction/Introduction';
import ExpertRecommendations from '../expert_recommendations/ExpertRecommendations';
import FeaturesInfo from '../features_info/FeaturesInfo';
import ActionsService from '../../services/ActionsService';
import AuthService from '../../services/AuthService';

const App = () => {
  useEffect(() => {
    AuthService.createJwtToken('shalev');
    ActionsService.createAction('User landing page.');
  }, []);

  return (
    <>
      <Header />
      <Introduction />
      <div className='wrap-body-components'>
        <Products />
        <AvReport />
        <ExpertRecommendations />
        <FeaturesInfo />
        <Faq />
        <Footer />
      </div>
    </>
  );
};

export default App;
