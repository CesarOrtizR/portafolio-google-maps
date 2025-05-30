import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px'
};

const center = {
  lat: 23.2329, // Cambia a tu ciudad
  lng: -106.4210
};

function Marcadores() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="container mt-5 text-light">
      <h2>📍 Ejercicio: Marcador e InfoWindow</h2>
      <p>Este mapa muestra un marcador centrado en Mazatlán, Sinaloa. Al hacer clic en el marcador, se abre una ventana de información.</p>

      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
          <Marker
            position={center}
            onClick={() => setSelected(center)}
          />
          {selected && (
            <InfoWindow
              position={selected}
              onCloseClick={() => setSelected(null)}
            >
              <div><strong>Mazatlán</strong><br />¡Hola desde el puerto!</div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Marcadores;
