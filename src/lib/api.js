import axios from 'axios';

const BASE_URL = 'https://api.fbi.gov/wanted/v1/list';

export const getAllSuspects = () => axios.get(BASE_URL);

// export const getSingleSuspect = (suspectUId) =>
//   axios.get(`${BASE_URL}/wantedList/${suspectUId}`);
