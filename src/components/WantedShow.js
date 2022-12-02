import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSingleSuspect } from '../lib/api';

const WantedShow = () => {
  const { id } = useParams();
  const [wanted, setWanted] = useState(null);

  useEffect(() => {
    getSingleSuspect(id)
      .then((res) => setWanted(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (wanted === null) {
    return <p>Loading....</p>;
  }

  console.log(wanted);

  return (
    <>
      <p>wanted show is working</p>
      <p>id is getting through {id}</p>
    </>
  );
};

export default WantedShow;
