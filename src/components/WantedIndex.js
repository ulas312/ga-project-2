/* eslint-disable indent */
import { useState, useEffect } from 'react';
import { getSuspectsPage } from '../lib/api';
import Pagination from '../components/Pagination';

import WantedCard from '../components/WantedCard';

function WantedIndex() {
  const [suspects, setSuspects] = useState(null);
  const [pageRequired, setPageRequired] = useState(30);
  const [noOfPages, setNoOfPages] = useState();
  const [categoryValue, setCategoryValue] = useState('');
  const personsPerPage = 20;

  function nav(pageNo) {
    setPageRequired(pageNo);
  }

  function handleCategoryChange(e) {
    setCategoryValue(e.target.value);
  }

  function filterMostWanted() {
    const filteredSuspects = categoryValue
      ? suspects?.items.filter((suspect) =>
          suspect.subjects.includes(categoryValue)
        )
      : suspects?.items;

    console.log({ filteredSuspects });
    return filteredSuspects;
  }

  console.log(categoryValue);
  console.log(filterMostWanted());

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
              <select name="catagories" onChange={handleCategoryChange}>
                <option value="" disabled selected>
                  Catagories
                </option>
                <option value="Cyber's Most Wanted">Cyber’s Most Wanted</option>
                <option value="Human Trafficking">Human Trafficking</option>
                <option value="Criminal Enterprise Investigations">
                  Criminal Enterprise Investigations
                </option>
                <option value="Kidnappings and Missing Persons">
                  Kidnappings and Missing Persons
                </option>
                <option value="Parental Kidnapping">Parental Kidnapping</option>
                <option value="ViCAP Missing Persons">Missing Persons</option>
                <option value="Counterintelligence">Counterintelligence</option>
                <option value="White-Collar Crime">White Collar Crimes</option>
                <option value="Known Bank Robbers">Known Bank Robbers</option>
                <option value="Violent Crime - Murders">
                  Violent Crimes - Murders
                </option>
                <option value="additional">Additional Violent Crimes</option>
                <option value="ViCAP Unidentified Persons">
                  Unidentified Persons
                </option>
                <option value="ViCAP Homicides and Sexual Assaults">
                  Homicides and Sexual Assaults
                </option>
                <option value="ECAP">Endangered Child Alert</option>
                <option value="Seeking Information">Seeking Information</option>
                <option value="Seeking Information - Terrorism">
                  Seeking Information - Terrorism
                </option>
                <option value="Domestic Terrorism">Domestic Terrorism</option>
                <option value="Most Wanted Terrorists">
                  Most Wanted Terrorists
                </option>
              </select>
            </div>
          </div>
          <div className="control">
            <button type="submit" className="button is-info">
              Choose
            </button>
          </div>
        </div>
        <p className="control is-expanded">
          <input className="input" type="text" placeholder="Search name" />
        </p>
        <p className="control">
          <a className="button is-info">Search</a>
        </p>
      </div>
      {!filterMostWanted().length && (
        <p>No search results for {categoryValue} on this page</p>
      )}
      <div className="container">
        <div className="columns is-multiline">
          {filterMostWanted().length
            ? filterMostWanted().map((suspect) => (
                <WantedCard
                  key={suspect.title}
                  _id={suspect.uid}
                  image={suspect.images[0].thumb}
                  name={suspect.title}
                />
              ))
            : suspects.items.map((suspect) => (
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
