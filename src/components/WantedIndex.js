// import axios from 'axios';
import { useState, useEffect } from 'react';
import { getSuspectsPage } from '../lib/api';
import Pagination from '../components/Pagination';

import WantedCard from '../components/WantedCard';

function WantedIndex() {
  const [suspects, setSuspects] = useState(null);
  const [pageRequired, setPageRequired] = useState(1);
  const personsPerPage = 20;
  // let noOfPages;

  useEffect(() => {
    getSuspectsPage(pageRequired)
      .then((res) => {
        setSuspects(res.data);
        // noOfPages = Math.ceil(suspects.total / personsPerPage);
        // console.log(noOfPages);
      })
      .catch((err) => console.error(err));
  }, [pageRequired]);

  if (suspects === null) {
    return <p>Loading Most Wanted...</p>;
  }

  // console.log(suspects.items[0]);

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {suspects.items.map((suspect) => (
            <WantedCard
              key={suspect.title}
              _id={suspect.uid}
              image={suspect.images[0].thumb}
              name={suspect.title}
            />
          ))}
        </div>
        <Pagination />
      </div>
    </section>
  );
}

export default WantedIndex;
