import ReactFullpage from '@fullpage/react-fullpage';
import React from 'react';
import './home.css';
import About from '../components/About';
import IntroTexts from '../components/IntroTexts';
import WorkLinks from '../components/WorkLinks';

export default function Home() {
  return (
    <ReactFullpage
      licenseKey={process.env.REACT_APP_FULLPAGE_LICENSE}
      paddingBottom="64px"
      render={() => (
        <ReactFullpage.Wrapper>
          <div className="section banner home">
            <IntroTexts />
          </div>
          <div className="section banner section-1">
            <About />
          </div>
          <div className="section banner foot">
            <WorkLinks />
          </div>
        </ReactFullpage.Wrapper>
      )}
    />
  );
}
