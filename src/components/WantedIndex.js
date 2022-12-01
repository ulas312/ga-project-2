// import axios from 'axios';
import { useState, useEffect } from 'react';
import { getAllSuspects } from '../lib/api';

// import WantedCard from '../components/WantedCard';

// const BASE_URL = 'https://api.fbi.gov/wanted/v1/list';

function WantedIndex() {
  console.log('test');
  const [suspects, setSuspects] = useState(null);

  useEffect(() => {
    getAllSuspects()
      .then((res) => setSuspects(res.data))
      .catch((err) => console.log.error(err));
  }, []);
  // console.log(suspects.items[0]);
  if (suspects === null) {
    return <p>Loading Most Wanted...</p>;
  }

  // return <p>Suspects</p>;

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {/* {suspects.map((suspect) => (
            <WantedCard key={suspect._id} {...suspect} />
          ))} */}
        </div>
      </div>
    </section>
  );
}

export default WantedIndex;
