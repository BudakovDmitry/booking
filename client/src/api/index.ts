import axios from 'axios';
import { API_URL } from 'src/constants';

export const get = (endpoint: string = '', searchParams: string = '') => axios.get(`${API_URL}${endpoint}${searchParams}`);
