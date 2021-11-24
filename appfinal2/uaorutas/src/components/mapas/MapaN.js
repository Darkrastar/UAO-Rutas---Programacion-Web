import React, { Component } from "react";
import { GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import CurrentLocation from "./MapC";

const mapStyles = {
  width: "116rem",
  height: "40rem",
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, // Hides or shows the InfoWindow
    activeMarker: {}, // Shows the active marker upon click
    selectedPlace: {}, // Shows the InfoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
        <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
      >
        <Marker
          onClick={this.onMarkerClick}
          
          name={'Current Location'}
          onPress={()=>
            this.props.navigation.navigate('Mapa'),{
                latitudePrincipio:parseFloat(Marker.lat),
                longitudePrincipio:parseFloat(Marker.lng),
                
            }
        }
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
        </CurrentLocation>
    );
  }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyD7lWkx3KdQMiw_YdPvGvfGS9bYMxMX5ik'
  })(MapContainer);
