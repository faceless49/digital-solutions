import axios from 'axios';

/**
 * @constant
 * Base URL for Api requests
 */
const API_URL = 'https://jsonplaceholder.typicode.com/';

/**
 * @constant
 * Profiles starter kit
 */
export const LIMIT_USERS = 4;

export const instance = axios.create({
  baseURL: API_URL,
});
