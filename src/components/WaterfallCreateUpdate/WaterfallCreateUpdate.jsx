import React, { useEffect, useState } from 'react';
import { createWaterfall, updateWaterfall, getWaterfall } from '../../services/waterfallsApi';

export default function WaterfallCreateUpdate(){
  const [pk, setPk] = useState('');
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [description, setDescription] = useState('');
  const [waterfall, setWaterfall] = useState({});

  useEffect(() => {
    const { match: { params } } = this.props;
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
      name,
      height,
      longitude,
      latitude,
      description
    });
  }, [name, height, longitude, latitude, description]);

  const handleCreate = () => createWaterfall(waterfall)
    .then(() => alert(`Success! Added ${name}!`))
    .then(() => window.location.replace('/'))
    .catch(err => alert(`Oops! Something went wrong. Please re-check your form. Error: ${err}`));

  const handleUpdate = id => updateWaterfall({
    id,
    ...waterfall
  })
    .then(() => alert(`Success! ${name} has been updated!`))
    .then(() => window.location.replace('/'))
    .catch(err => alert(`Oops! Something went wrong. Please re-check your form. Error: ${err}`));

  const handleSubmit = () => {
    event.preventDefault();
    if(pk) handleUpdate(pk);
    else handleCreate();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name:</label>
        <input className="form-control" type="text" placeholder="Waterfall name (required)" value={name} onChange={({ target }) => setName(target.value)} />

        <label>Height:</label>
        <input className="form-control" type="text" placeholder="Waterfall height (required)" value={height} onChange={(({ target }) => setHeight(target.value))} />

        <label>Longitude:</label>
        <input className="form-control" type="text" placeholder="Waterfall longitude (required)" value={longitude} onChange={(({ target }) => setLongitude(target.value))} />

        <label>Latitude:</label>
        <input className="form-control" type="text" placeholder="Waterfall latitude (required)" value={latitude} onChange={(({ target }) => setLatitude(target.value))} />

        <label>Description:</label>
        <textarea className="form-control" placeholder="Waterfall description (optional)" value={description} onChange={(({ target }) => setDescription(target.value))} />

        <input className="btn btn-primary" type="submit" value="Submit" />
      </div>
    </form>
  ); 
}
