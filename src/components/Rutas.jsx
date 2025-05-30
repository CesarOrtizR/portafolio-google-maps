import React, { useState } from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px'
};

const origin = 'Mazatlán, Sinaloa';
const destination = 'Plazuela Machado, Mazatlán';

function Rutas() {
  const [directions, setDirections] = useState(null);

  const directionsCallback = (response) => {
    if (response !== null && response.status === 'OK') {
      setDirections(response);
    }
  };

  return (
    <div className="container mt-5 text-light">
      <h2>🚗 Ejercicio: Rutas con Directions API</h2>
      <p>Este ejemplo muestra una ruta entre dos ubicaciones de Mazatlán utilizando DirectionsService y DirectionsRenderer.</p>

      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={{ lat: 23.2329, lng: -106.4210 }} zoom={13}>
          <DirectionsService
            options={{
              destination: destination,
              origin: origin,
              travelMode: 'DRIVING'
            }}
            callback={directionsCallback}
          />
          {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Rutas;
