import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const mapStyle = {
    width: '100%',
    height: '400px'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };
const Map = () => {
    return (
        <div>
            <LoadScript
                googleMapsApiKey="###################"
                >
                <GoogleMap
                    mapContainerStyle={mapStyle}
                    center={center}
                    zoom={10}
                    >
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default Map;