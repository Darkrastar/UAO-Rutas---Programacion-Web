import React, { Component } from "react";
import { compose, withProps } from "recompose";
import DirectionRenderComponent from "./DirectionRenderComponent";
import { G_API_URL } from "../../utility/constants";
import DummyLocations from "../../utility/dummyLocations";
const { withScriptjs, withGoogleMap, GoogleMap } = require("react-google-maps");
class Directions extends Component {
  state = {
    defaultZoom: 10,
    map: null,
    center: {
      lat: 3.4769152048306116,
      lng: -76.49489249820736
    }
  };

  render() {
    return (
      <GoogleMap
        defaultZoom={this.state.defaultZoom}
        center={this.state.center}
        defaultCenter={new window.google.maps.LatLng(3.4769152048306116, -76.49489249820736)}
      >
        {DummyLocations.map((elem, index) => {
          return (
            <DirectionRenderComponent
              key={index}
              index={index + 1}
              strokeColor={elem.strokeColor}
              from={elem.from}
              to={elem.to}
            />
          );
        })}
      </GoogleMap>
    );
  }
}

export default compose(
  withProps({
    googleMapURL: G_API_URL,
    loadingElement: <div style={{ height: `100%`, width: `100%` }} />,
    containerElement: <div style={{ height: `40rem`, width:`116rem`,padding:`4rem` }} />,
    mapElement: <div style={{ height: `100%`,width:`100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(Directions);
