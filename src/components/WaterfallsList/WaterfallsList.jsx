import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { getWaterfalls, deleteWaterfall } from '../../services/waterfallsApi';
import WaterfallCreateUpdate from '../WaterfallCreateUpdate/WaterfallCreateUpdate';

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

  const waterfallsTable = waterfalls.map(waterfall =>    
    <tr key={waterfall.id}>
      <td>{waterfall.id}</td>
      <td>{waterfall.name}</td>
      <td>{waterfall.height}</td>
      <td>{waterfall.longitude}</td>
      <td>{waterfall.latitude}</td>
      <td>{waterfall.description}</td>
      <td>
        <Route path="/customer/:pk" component={WaterfallCreateUpdate}>Update</Route>
        <button className="btn btn-danger" onClick={() => handleDelete(waterfall.id)}>Delete</button>
      </td>
    </tr>);

  return (
    <div className="waterfalls--list">
      <table className="table">
        <thead key="thead">
          <tr>
            <th>#</th>
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
  );
}
