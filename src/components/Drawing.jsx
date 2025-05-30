import React, { useState } from 'react';
import {
  GoogleMap,
  LoadScript,
  DrawingManager
} from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px'
};

const center = {
  lat: 23.2329,
  lng: -106.4210
};

function Drawing() {
  const [shapes, setShapes] = useState([]);

  const handleOverlayComplete = (e) => {
    const newShape = e.overlay;
    const type = e.type;
    setShapes((prev) => [...prev, { type, shape: newShape }]);
  };

  return (
    <div className="container mt-5 text-light">
      <h2>✏️ Ejercicio: Herramientas de Dibujo</h2>
      <p>Este mapa permite dibujar figuras geométricas como círculos, rectángulos y polígonos sobre el mapa.</p>

      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        libraries={['drawing']}
      >
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
          <DrawingManager
            onOverlayComplete={handleOverlayComplete}
            options={{
              drawingControl: true,
              drawingControlOptions: {
                position: window.google.maps.ControlPosition.TOP_CENTER,
                drawingModes: ['circle', 'rectangle', 'polygon']
              }
            }}
          />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Drawing;
