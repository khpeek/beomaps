import React from 'react'
import PropTypes from 'prop-types'
import { MapWithGroundOverlay } from './MapWithGroundOverlay'
import { withStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import FormLabel from '@material-ui/core/FormLabel'
import Slider from '@material-ui/lab/Slider'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  paper: {
    padding: theme.spacing(1.5),
  },
  label: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
})

class AdjustableGroundoverlay extends React.PureComponent {
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
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <MapWithGroundOverlay
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `600px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            opacity={this.state.opacity}
            defaultBounds={this.props.defaultBounds}
          />
        </Grid>
        <Grid item xs={6}>
          <Paper className={this.props.classes.paper}>
            <Box flexDirection="column">
              <FormLabel className={this.props.classes.label}>Overlay Opacity</FormLabel>
              <Box mt={1}>
                <Slider
                  value={this.state.opacity}
                  min={0}
                  max={1}
                  onChange={this.handleChange}
                />
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

AdjustableGroundoverlay.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AdjustableGroundoverlay)
