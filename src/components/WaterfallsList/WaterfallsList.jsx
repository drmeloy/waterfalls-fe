import React, { useState, useEffect } from 'react';
import { getWaterfalls, deleteWaterfall } from '../../services/waterfallsApi';
import { Link } from 'react-router-dom';
import LeafletMap from '../LeafletMap/LeafletMap';

export default function WaterfallsList(){
  const [waterfalls, setWaterfalls] = useState([]);
  
  useEffect(() => {
    getWaterfalls().then(setWaterfalls);
  }, []);

  const handleDelete = id => deleteWaterfall(id)
    .then(() => {
      const updatedWaterfallsList = waterfalls.filter(waterfall => waterfall.id !== id);
      setWaterfalls(updatedWaterfallsList);
    });

  const waterfallsTable = waterfalls
    .sort((a, b) => a.id < b.id)
    .map(waterfall =>
      <tr key={waterfall.id}>
        <td>{waterfall.name}</td>
        <td>{waterfall.height}</td>
        <td>{waterfall.longitude}</td>
        <td>{waterfall.latitude}</td>
        <td>{waterfall.description}</td>
        <td>
          <Link to={`/waterfalls/${waterfall.id}`}>
          Update
          </Link>
          <button className="btn btn-danger" onClick={() => handleDelete(waterfall.id)}>Delete</button>
        </td>
      </tr>);

  return (
    <>
      <LeafletMap waterfalls={waterfalls} />
      <div className="waterfalls--list">
        <table className="table">
          <thead key="thead">
            <tr>
              <th>Name</th>
              <th>Height</th>
              <th>Longitude</th>
              <th>Latitude</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {waterfallsTable}
          </tbody>
        </table>
      </div>
    </>
  );
}
