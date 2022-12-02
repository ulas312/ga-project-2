import axios from 'axios';

const BASE_URL = 'https://api.fbi.gov';

export const getAllSuspects = () => axios.get(`${BASE_URL}/wanted/v1/list`);

export const getSingleSuspect = (UId) =>
  axios.get(`${BASE_URL}/@wanted-person/${UId}`);
