import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  // Coordinates for Limuru, Kenya
  const limuruCoordinates = [-1.1000, 36.6500]; // Example coordinates, adjust if needed

  useEffect(() => {
    // Initialize the map
    const map = L.map('map').setView(limuruCoordinates, 12); // Set view to Limuru, adjusted zoom

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    // Add a marker for Limuru
    L.marker(limuruCoordinates)
      .addTo(map)
      .bindPopup('Limuru')
      .openPopup();

    // Cleanup on component unmount
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      id="map"
      style={{
        height: '400px',
        width: '100%',
        border: '1px solid #ccc',
        borderRadius: '8px',
      }}
    ></div>
  );
};

export default Map;