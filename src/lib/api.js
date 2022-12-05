import axios from 'axios';

const BASE_URL = 'https://api.fbi.gov';

export const getSuspectsPage = (pageNo) =>
  axios.get(`${BASE_URL}/wanted/v1/list?page=${pageNo}`);

export const getSingleSuspect = (UId) =>
  axios.get(`${BASE_URL}/@wanted-person/${UId}`);
