import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import './App.css';
import { AdjustableGroundoverlay } from './components/AdjustableGroundoverlay'

require('dotenv').config()

function App() {
  return (
    <div className="App">
      <CssBaseline/>
      <Container>
        <AdjustableGroundoverlay/>
      </Container>
    </div>
  );
}

export default App;
