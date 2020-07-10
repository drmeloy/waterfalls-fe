import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createWaterfall, updateWaterfall, getWaterfall } from '../../services/waterfallsApi';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
    if(/[a-zA-z]/.test(longitude) || /[a-zA-z]/.test(latitude)) alert('Latitude and longitude cannot include letters. Please refer to coordinates as either positive or negative numbers (coordinates will be negative if South or West)');
    else if(pk) handleUpdate(pk);
    else handleCreate();
  };

  return (
    <Form onSubmit={handleSubmit} className='mt-5 p-3'>
      <Form.Group controlId='name'>
        <Form.Label>Name (required):</Form.Label>
        <Form.Control 
          required
          type='text' 
          value={name} 
          onChange={({ target }) => setName(target.value)} />
      </Form.Group>
      <Form.Group controlId='height'>
        <Form.Label>Height (required):</Form.Label>
        <Form.Control 
          required
          type='text' 
          value={height} 
          onChange={({ target }) => setHeight(target.value)} />
      </Form.Group>
      <Form.Group controlId='latitude'>
        <Form.Label>Latitude (required):</Form.Label>
        <Form.Control 
          required
          type='text' 
          value={latitude} 
          onChange={(({ target }) => setLatitude(target.value))} />
        <Form.Text className='text-muted'>
          Please include only the numbers and negative and period symbols, not the cardinal direction indicators. For example, 45.2987 S is written -45.2987.
        </Form.Text>
      </Form.Group>
      <Form.Group controlId='longitude'>
        <Form.Label>Longitude (required):</Form.Label>
        <Form.Control 
          required
          type='text' 
          value={longitude} 
          onChange={(({ target }) => setLongitude(target.value))} />
        <Form.Text className='text-muted'>
          Please include only the numbers and negative and period symbols, not the cardinal direction indicators. For example, 122.8624 W is written -122.8624.
        </Form.Text>
      </Form.Group>
      <Form.Group controlId='description'>
        <Form.Label>Description (optional):</Form.Label>
        <Form.Control 
          type='text' 
          as='textarea' 
          value={description} 
          onChange={(({ target }) => setDescription(target.value))} />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  ); 
}

WaterfallCreateUpdate.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  })
};
