import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import './App.css';

import Header from './Header';
import Search from './Search';
import CardsBlock from './CardsBlock';
import Heading from './Heading';

import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyle = {
  width: '100%',
  height: '100%'
};

class App extends Component {
  render() {
    return (
      // <div>
      //   <Grid columns={1} textAlign="center">
      //     <Grid.Row>
      //       <Grid.Column>
      //         <Header />
      //       </Grid.Column>
      //     </Grid.Row>
      //     <Grid.Row>
      //       <Grid.Column>
      //         <Search />
      //       </Grid.Column>
      //     </Grid.Row>
      //   </Grid>
      //   <Grid columns={2}>
      //     <Grid.Row>
      //       <Grid.Column>
      //         <CardsBlock />
      //       </Grid.Column>
      //       <Grid.Column>
      //         <Heading />
      //       </Grid.Column>
      //     </Grid.Row>
      //   </Grid>
      // </div>
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyle}
        initialCenter={{ lat: -1.2884, lng: 36.8233 }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA6VvqBRTsFFIWcpRrpJEKMy1D1Pigl_io'
})(App);
