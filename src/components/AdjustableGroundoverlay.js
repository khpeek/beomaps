import React from 'react'
import { MapWithGroundOverlay } from './MapWithGroundOverlay'
import Slider from '@material-ui/lab/Slider'

export class AdjustableGroundoverlay extends React.PureComponent {
  constructor(props, context) {
    super(props, context)
    this.state = {opacity: 0.5}
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, value) {
    this.setState(state => ({
      opacity: value
    }));
  }

  render() {
    return (
      <div>
        <MapWithGroundOverlay
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `600px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          opacity={this.state.opacity}
        />
        <Slider
          value={this.state.opacity}
          min={0}
          max={1}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
