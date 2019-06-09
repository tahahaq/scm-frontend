import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyle = {
  width: '80%',
  height: '80%',
  marginTop: '25px'
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
    return (
      <Container>
        <Map
          google={this.props.google}
          style={mapStyle}
          zoom={14}
          initialCenter={{ lat: -1.2884, lng: 36.8233 }}
        >
          <Marker
            onClick={this.onMarkerClick}
            name={'Kenyatta International Convention Centre'}
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
