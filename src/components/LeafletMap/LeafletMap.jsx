import React, { useState } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';

export default function LeafletMap({ waterfalls }){
  const [activeWaterfall, setActiveWaterfall] = useState(null);

  const icon = new Icon({
    iconUrl: '../../public/assets/waterfall-icon.png',
    iconSize: [40, 40]
  });

  const markers = waterfalls.map(waterfall => (
    <Marker 
      key={waterfall.id}
      position={[waterfall.latitude, waterfall.longitude]}
      onClick={() => setActiveWaterfall(waterfall)}
      icon={icon} />
  ));
    

  return (
    <Map center={[43.8, -120.6]} zoom={7} style={{ height: '500px', width: '50vw' }}>
      {markers}
      {activeWaterfall && (
        <Popup
          position={[activeWaterfall.latitude, activeWaterfall.longitude]}
          onClose={() => setActiveWaterfall(null)}>
          <div>
            <h6>{activeWaterfall.name}</h6>
            <p>{activeWaterfall.description}</p>
            <span>Latitude: {activeWaterfall.latitude}</span><br/>
            <span>Longitude: {activeWaterfall.longitude}</span>
          </div>
        </Popup>
      )}
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
    </Map>
  );
}

// 45.5051° N, 122.6750° W Portland
// 44.0582° N, 121.3153° W Bend

