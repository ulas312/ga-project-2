// import axios from 'axios';
import { useState, useEffect } from 'react';
import { getAllSuspects } from '../lib/api';

import WantedCard from '../components/WantedCard';

const BASE_URL = 'https://api.fbi.gov/wanted/v1/list';

function WantedIndex() {
  const [suspects, setSuspects] = useState(null);

  useEffect(() => {
    getAllSuspects()
      .then((res) => setSuspects(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (suspects === null) {
    return <p>Loading Most Wanted...</p>;
  }

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {suspects.items.map((suspect) => (
            <WantedCard
              key={suspect.title}
              // key={suspect._id}
              image={suspect.images[0].thumb}
              name={suspect.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WantedIndex;
