import React from 'react';
import './App.css';
import { MapWithGroundOverlay } from "./components/MapWithGroundOverlay"

require('dotenv').config()

function App() {
  return (
    <div className="App">
      <MapWithGroundOverlay
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `600px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

export default App;
