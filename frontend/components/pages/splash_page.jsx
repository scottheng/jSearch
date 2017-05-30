import React, { Component } from 'react';
import SearchContainer from '../search/search_container';

const SplashPage = () => {
  return(
    <div className="splash-outer-container">
      <div className="splash-image">
        <div className="splash-inner-container">

          <div className="splash-logo">
            <h1>M</h1>
            <h4>MEETARII</h4>
          </div>

          <SearchContainer />
        </div>
      </div>
    </div>
  );
};

export default SplashPage;
