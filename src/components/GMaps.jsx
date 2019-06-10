import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyle = {
  width: '100%',
  height: '100%'
};

class GMaps extends Component {
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
    const { latitude, longitude } = this.props;
    console.log(latitude, longitude);

    return (
      <Container>
        <Map
          google={this.props.google}
          style={mapStyle}
          zoom={12}
          initialCenter={{
            lat: latitude,
            lng: longitude
          }}
        >
          <Marker
            // position={{ latitude, longitude: -122.0 }}
            onClick={this.onMarkerClick}
            name={'Current location'}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </Map>
      </Container>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA6VvqBRTsFFIWcpRrpJEKMy1D1Pigl_io'
})(GMaps);
