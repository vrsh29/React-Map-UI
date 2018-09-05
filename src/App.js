import React, {
    Component
} from 'react';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class App extends Component {
    render() {
        return ( < div className = "App" > 
                <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
        </InfoWindow>
      </Map>/> 
       </div >
        );
    }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDluCzLjt9KY11GAayQQNxsoOwF1_OuAM0')
})(App)