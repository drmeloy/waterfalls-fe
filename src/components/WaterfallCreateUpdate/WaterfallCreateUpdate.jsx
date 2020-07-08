import React, { useEffect, useState } from 'react';
import { createWaterfall, updateWaterfall, getWaterfall } from '../../services/waterfallsApi';

export default function WaterfallCreateUpdate({ match: { params } }){
  const [pk, setPk] = useState('');
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [description, setDescription] = useState('');
  const [waterfall, setWaterfall] = useState({});

  useEffect(() => {
    if(params && params.id){
      getWaterfall(params.id)
        .then(waterfall => {
          setPk(waterfall.id);
          setName(waterfall.name);
          setHeight(waterfall.height);
          setLongitude(waterfall.longitude);
          setLatitude(waterfall.latitude);
          setDescription(waterfall.description);
        });
    }
  }, []);

  useEffect(() => {
    setWaterfall({
      'name': name,
      'height': height,
      'longitude': longitude,
      'latitude': latitude,
      'description': description
    });
  }, [name, height, longitude, latitude, description]);

  const handleCreate = () => createWaterfall(waterfall)
    .then(() => alert(`Success! Added ${name}!`))
    .then(() => window.location.replace('/'))
    .catch(() => alert('Oops! Something went wrong. Please re-check your form.'));

  const handleUpdate = id => updateWaterfall({
    id,
    ...waterfall
  })
    .then(() => alert(`Success! ${name} has been updated!`))
    .then(() => window.location.replace('/'))
    .catch(() => alert('Oops! Something went wrong. Please re-check your form.'));

  const handleSubmit = () => {
    event.preventDefault();
    if(pk) handleUpdate(pk);
    else handleCreate();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name (required):</label>
        <input className="form-control" type="text" value={name} onChange={({ target }) => setName(target.value)} />

        <label>Height (required):</label>
        <input className="form-control" type="text" value={height} onChange={(({ target }) => setHeight(target.value))} />

        <label>Longitude (required):</label>
        <input className="form-control" type="text" value={longitude} onChange={(({ target }) => setLongitude(target.value))} />

        <label>Latitude (required):</label>
        <input className="form-control" type="text" value={latitude} onChange={(({ target }) => setLatitude(target.value))} />

        <label>Description (optional):</label>
        <textarea className="form-control" value={description} onChange={(({ target }) => setDescription(target.value))} />

        <input className="btn btn-primary" type="submit" value="Submit" />
      </div>
    </form>
  ); 
}
