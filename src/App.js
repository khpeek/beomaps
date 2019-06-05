import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import './App.css';
import AdjustableGroundoverlay from './components/AdjustableGroundoverlay'

require('dotenv').config()

function App() {
  return (
    <div className="App">
      <CssBaseline/>
      <Container>
        <AdjustableGroundoverlay
          defaultBounds={{
            north: 40.773941,
            south: 40.712216,
            east: -74.12544,
            west: -74.22655
          }}
        />
      </Container>
    </div>
  );
}

export default App;
