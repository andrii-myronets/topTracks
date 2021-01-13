import Axios from 'axios';

export const BASE_URL = 'http://ws.audioscrobbler.com/2.0';
export const API_KEY = '20124034fe32565b5027390c6a95e776';

export const server = Axios.create({
    baseURL: BASE_URL
  });