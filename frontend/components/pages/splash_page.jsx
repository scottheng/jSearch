import React, { Component } from 'react';
import SearchContainer from '../search/search_container';

const SplashPage = () => {
  return(
    <div className="splash-outer-container">
      <div className="splash-image">
        <SearchContainer />
      </div>
    </div>
  );
};

export default SplashPage;
