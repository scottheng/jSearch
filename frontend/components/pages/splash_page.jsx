import React, { Component } from 'react';
import Search from '../search/search';

const SplashPage = () => {
  return(
    <div className="splash-outer-container">
      <div className="splash-image">
        <Search />
      </div>
    </div>
  );
};

export default SplashPage;
