import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Menu from '@components/Menu/Menu.js';
import PageHeader from '@components/Page/PageHeader.js';
import Grid from '@components/Grid/Grid.js';
import FeaturedItem from '@components/FeaturedItem/FeaturedItem.js';
import "./Home.scss";


class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Menu />
        <PageHeader Section="Home" />
        <div className="PageContentWrapperFullWidth">
          <div className="PageTitle">
          </div>
          <div className="PageContent">
            <FeaturedItem/>
            <Grid/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
