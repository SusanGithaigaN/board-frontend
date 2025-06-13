import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from '../assets/pin-fill.svg'

const Map = () => {
  // Coordinates for Limuru, Kenya
  const limuruCoordinates = [-1.1000, 36.6500]; 

  useEffect(() => {
    // Custom icon
    const customIcon = L.icon({
      iconUrl: icon,
      iconSize: [32, 32], 
      iconAnchor: [16, 32], 
      popupAnchor: [0, -32], 
    });

    // Initialize the map
    const map = L.map('map').setView(limuruCoordinates, 12); 

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    // Add a marker with the custom icon
    L.marker(limuruCoordinates, { icon: customIcon })
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