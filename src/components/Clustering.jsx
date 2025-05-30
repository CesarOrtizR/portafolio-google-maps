import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { MarkerClusterer } from '@googlemaps/markerclusterer';

const containerStyle = {
  width: '100%',
  height: '500px'
};

const center = {
  lat: 23.2329,
  lng: -106.4210
};

// Simulación de múltiples ubicaciones cercanas a Mazatlán
const locations = [
  { lat: 23.2329, lng: -106.4210 },
  { lat: 23.2300, lng: -106.4200 },
  { lat: 23.2310, lng: -106.4190 },
  { lat: 23.2330, lng: -106.4180 },
  { lat: 23.2345, lng: -106.4220 },
  { lat: 23.2350, lng: -106.4235 },
  { lat: 23.2360, lng: -106.4250 }
];

function Clustering() {
  const onLoad = map => {
    const markers = locations.map((location) => {
      return new window.google.maps.Marker({
        position: location,
      });
    });

    new MarkerClusterer({ markers, map });
  };

  return (
    <div className="container mt-5 text-light">
      <h2>🗺️ Ejercicio: Clustering de Marcadores</h2>
      <p>Este ejemplo muestra cómo agrupar múltiples marcadores usando MarkerClusterer para mejorar el rendimiento y la visualización en el mapa.</p>

      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
          onLoad={onLoad}
        />
      </LoadScript>
    </div>
  );
}

export default Clustering;
