import { useState, useEffect } from 'react';
import { getSuspectsPage } from '../lib/api';
import Pagination from '../components/Pagination';

import WantedCard from '../components/WantedCard';

function WantedIndex() {
  const [suspects, setSuspects] = useState(null);
  const [pageRequired, setPageRequired] = useState(30);
  const [noOfPages, setNoOfPages] = useState();
  const personsPerPage = 20;

  function nav(pageNo) {
    setPageRequired(pageNo);
  }

  useEffect(() => {
    getSuspectsPage(pageRequired)
      .then((res) => {
        setSuspects(res.data);
        setNoOfPages(Math.ceil(res.data.total / personsPerPage));
      })
      .catch((err) => console.error(err));
  }, [pageRequired]);

  if (suspects === null) {
    return <p>Loading Most Wanted...</p>;
  }

  return (
    <section className="section">
      <div className="field is-grouped">
        <div className="field has-addons">
          <div className="control is-expanded">
            <div className="select is-fullwidth">
              <select name="country">
                <option value="" disabled selected>
                  Catagories
                </option>
                <option value="cyber">Cyber’s Most Wanted</option>
                <option value="trafficking">Human Trafficking</option>
                <option value="cei">Criminal Enterprise Investigations</option>
                <option value="counterintelligence">Counterintelligence</option>
                <option value="wcc">White Collar Crimes</option>
                <option value="additional">Additional Violent Crimes</option>
                <option value="murders">Violent Crimes - Murders</option>
                <option value="cac">Crimes Against Children</option>
                <option value="Suriname">Suriname</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Venezuela">Venezuela</option>
              </select>
            </div>
          </div>
          <div className="control">
            <button type="submit" className="button is-info">
              Choose
            </button>
          </div>
        </div>
        &ensp;
        <p className="control is-expanded">
          <input className="input" type="text" placeholder="Search name" />
        </p>
        <p className="control">
          <a className="button is-info">Search</a>
        </p>
      </div>

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
        <Pagination max={noOfPages} currentPage={pageRequired} pageNav={nav} />
      </div>
    </section>
  );
}

export default WantedIndex;
