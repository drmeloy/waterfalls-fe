import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';

export default function LeafletMap({ waterfalls }){
  const [activeWaterfall, setActiveWaterfall] = useState(null);

  const icon = new Icon({
    iconUrl: '../../public/assets/waterfall-icon.png',
    iconSize: [35, 35]
  });

  const markers = waterfalls.map(waterfall => (
    <Marker 
      key={waterfall.id}
      position={[waterfall.latitude, waterfall.longitude]}
      onClick={() => setActiveWaterfall(waterfall)}
      icon={icon} />
  ));

  return (
    <Map center={[44.1, -120.6]} zoom={7} style={{ height: '600px', width: '100vw' }}>
      {markers}
      {activeWaterfall && (
        <Popup
          position={[activeWaterfall.latitude, activeWaterfall.longitude]}
          onClose={() => setActiveWaterfall(null)}>
          <div>
            <h6>{activeWaterfall.name}</h6>
            <p>{activeWaterfall.description}</p>
            <span>Height: {activeWaterfall.height}</span><br/>
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

LeafletMap.propTypes = {
  waterfalls: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    latitude: PropTypes.string.isRequired,
    longitude: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }))
};
