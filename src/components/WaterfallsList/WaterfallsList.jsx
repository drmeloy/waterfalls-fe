import React, { useState, useEffect } from 'react';
import { getWaterfalls, deleteWaterfall } from '../../services/waterfallsApi';
import { Link } from 'react-router-dom';
import LeafletMap from '../LeafletMap/LeafletMap';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

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
        <td>{waterfall.latitude}</td>
        <td>{waterfall.longitude}</td>
        <td>{waterfall.description}</td>
        <td>
          <Link to={`/waterfall/${waterfall.id}/${waterfall.name}/`} style={{ textDecoration: 'none' }}>
            <Button variant='outline-secondary' className='mb-3' block>
              Update
            </Button>
          </Link>
          <Button variant='outline-danger' onClick={() => handleDelete(waterfall.id)} block>
            Delete
          </Button>
        </td>
      </tr>);

  return (
    <>
      <LeafletMap waterfalls={waterfalls} />
      <div className="waterfalls--list">
        <Table size='small' className='mx-auto'>
          <thead key="thead">
            <tr>
              <th>Name</th>
              <th>Height</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {waterfallsTable}
          </tbody>
        </Table>
      </div>
    </>
  );
}
