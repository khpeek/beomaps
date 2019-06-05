import React from 'react'
import { compose } from 'recompose'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  GroundOverlay } from 'react-google-maps'

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
      defaultBounds={props.defaultBounds}
      opacity={props.opacity}
    />
  </GoogleMap>
);
