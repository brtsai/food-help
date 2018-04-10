import React from 'react';

import SplashSearchContainer from './splash_search_container';
import FeaturedBusinesses from './featured_businesses';

class HomePage extends React.Component {
  render() {
    return (
      <div className="homepage-component">
        <SplashSearchContainer />
        <FeaturedBusinesses />
      </div>
    );
  }
}

export default HomePage;
