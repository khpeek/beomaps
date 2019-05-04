/* global google */

import React from "react"
import { compose } from "recompose"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  GroundOverlay } from "react-google-maps"

export const MapWithGroundOverlay = compose(
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{lat: 40.740, lng: -74.18}}
  >
    <GroundOverlay
      defaultUrl="https://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg"
      defaultBounds={new google.maps.LatLngBounds(
        new google.maps.LatLng(40.712216, -74.22655),
        new google.maps.LatLng(40.773941, -74.12544)
      )}
      opacity={props.opacity}
    />
  </GoogleMap>
);
