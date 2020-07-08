import axios from 'axios';
const API_URL = 'https://localhost:8000/api/waterfalls/';

export const getWaterfalls = () => axios.get(API_URL).then(res => res.data);

export const getWaterfall = pk => axios.get(`${API_URL}/${pk}`).then(res => res.data);

export const createWaterfall = waterfall => axios.post(API_URL, waterfall);

export const updateWaterfall = waterfall => axios.put(`${API_URL}/${waterfall.pk}`, waterfall);

export const deleteWaterfall = waterfall => axios.delete(`${API_URL}/${waterfall.pk}`);
