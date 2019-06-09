import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import './App.css';

import Header from './Header';
import Search from './Search';
import CardsBlock from './CardsBlock';
import Heading from './Heading';

// import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

import GMaps from './GMaps';

const mapStyle = {
  width: '100%',
  height: '100%'
};

class App extends Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {} //Shows the infoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

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
      <div>
        <GMaps />
      </div>
    );
  }
}

export default App;
