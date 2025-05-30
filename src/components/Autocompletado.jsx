import React, { useRef, useState } from 'react';
import { GoogleMap, LoadScript, Autocomplete } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px'
};

const center = {
  lat: 23.2329,
  lng: -106.4210
};

function Autocompletado() {
  const [map, setMap] = useState(null);
  const autoRef = useRef(null);

  const handlePlaceChanged = () => {
    const place = autoRef.current.getPlace();
    if (place.geometry) {
      const location = place.geometry.location;
      map.panTo({ lat: location.lat(), lng: location.lng() });
    }
  };

  return (
    <div className="container mt-5 text-light">
      <h2>🧭 Ejercicio: Autocompletado de Direcciones</h2>
      <p>Este mapa permite buscar direcciones usando la funcionalidad de autocompletado con Places API.</p>

      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        libraries={['places']}
      >
        <Autocomplete
          onLoad={(auto) => (autoRef.current = auto)}
          onPlaceChanged={handlePlaceChanged}
        >
          <input
            type="text"
            placeholder="Buscar una dirección..."
            className="form-control mb-3"
          />
        </Autocomplete>

        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={13}
          onLoad={(map) => setMap(map)}
        />
      </LoadScript>
    </div>
  );
}

export default Autocompletado;
