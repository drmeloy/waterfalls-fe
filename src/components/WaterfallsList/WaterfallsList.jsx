import React, { useState, useEffect } from 'react';
import { getWaterfalls, deleteWaterfall } from '../../services/waterfallsApi';

export default function WaterfallsList(){
  const [waterfalls, setWaterfalls] = useState([]);
  
  useEffect(() => {
    const waterfallList = getWaterfalls();
    setWaterfalls(waterfallList);
  }, []);

  const handleDelete = pk => deleteWaterfall(pk)
    .then(() => {
      const updatedWaterfallsList = waterfalls.filter(waterfall => waterfall.pk !== pk);
      setWaterfalls(updatedWaterfallsList);
    });

  const waterfallsTable = waterfalls.map(waterfall =>
    <tr key={waterfall.pk}>
      <td>{waterfall.name}</td>
      <td>{waterfall.height}</td>
      <td>{waterfall.longitude}</td>
      <td>{waterfall.latitude}</td>
      <td>{waterfall.description}</td>
      <td>
        <button  onClick={() => handleDelete(waterfall.pk) }>Delete</button>
        <a href={'/waterfalls/' + waterfall.pk}>Update</a>
      </td>
    </tr>);

  return (
    <div  className="waterfalls--list">
      <table  className="table">
        <thead  key="thead">
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
  );
}
