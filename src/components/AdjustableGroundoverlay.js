import React from "react"
import { MapWithGroundOverlay } from "./MapWithGroundOverlay"

export class AdjustableGroundoverlay extends React.PureComponent {
  constructor(props, context) {
    super(props, context)
    this.state = {opacity: 0.5}
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      opacity: 1.0
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
        <button onClick={this.handleClick}>
          {`Opacity: ${this.state.opacity}`}
        </button>
      </div>
    );
  }
}
