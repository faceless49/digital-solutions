import axios from 'axios';

/**
 * @constant
 * Base URL for Api requests
 */
const API_URL = 'https://jsonplaceholder.typicode.com/';

export const instance = axios.create({
  baseURL: API_URL,
});
