// import axios from 'axios';
import { useState, useEffect } from 'react';
import { getAllSuspects } from '../lib/api';
// const BASE_URL = 'https://api.fbi.gov/wanted/v1/list';

function WantedIndex() {
  console.log('gfsdfg');
  const [suspects, setSuspects] = useState(null);

  useEffect(() => {
    getAllSuspects()
      .then((res) => setSuspects(res.data))
      .catch((err) => console.log.error(err));
  }, []);
  console.log(suspects.items[0]);
  if (suspects === null) {
    return <p>Loading Most Wanted...</p>;
  }

  return <p>Suspects</p>;
}

export default WantedIndex;
