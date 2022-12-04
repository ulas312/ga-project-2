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
      <div className="card">
        <div className="card-content">
          <p className="title">{wanted.title} </p>
          <p className="subtitle">{wanted.description}</p>
          <p className="warning">{wanted.warning_message}</p>
          <a className="title download-poster" href={wanted.files[0].url}>
            Download Poster{' '}
          </a>
        </div>
      </div>

      {/* <div className="columns">
        <div className="column is-three-quarters">is-three-quarters</div>
        <div className="column">Auto</div>
        <div className="column">Auto</div>
      </div> */}

      <div className="columns">
        <div className="card column is-one-third">
          <div className="card-image ">
            <figure className="is-2by3">
              <img
                src={wanted.images[0].original}
                alt={wanted.images[0].caption}
              />
            </figure>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <p className="title">Reward: </p>
            <p className="subtitle">{wanted.reward_text}</p>
          </div>
          <div className="card-content">
            <p className="title">Details: </p>
            <p className="subtitle">
              {wanted.details} {wanted.caution}
            </p>
          </div>
          <div className="card-content">
            <p className="title">Other info: </p>
            <p className="subtitle">{wanted.remarks}</p>
            {/* <p className="subtitle">{wanted.description}</p> */}
          </div>
        </div>
      </div>

      <div className="columns">
        <div className="card column is-one-third">
          <div className="card-content">
            <table className="table is-striped">
              <tbody>
                <tr>
                  <td>Date(s) of Birth Used</td>
                  <td>{wanted.dates_of_birth_used}</td>
                </tr>
                <tr>
                  <td>Hair</td>
                  <td>{wanted.hair}</td>
                </tr>
                <tr>
                  <td>Eyes</td>
                  <td>{wanted.eyes_raw}</td>
                </tr>
                <tr>
                  <td>Height (inch)</td>
                  <td>{wanted.height_max}</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>{wanted.weight}</td>
                </tr>
                <tr>
                  <td>Sex</td>
                  <td>{wanted.sex}</td>
                </tr>
                <tr>
                  <td>Race</td>
                  <td>{wanted.race}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <p className="title">Submit a Tip:</p>
            <p className="subtitle">
              If you have any information concerning this person, please contact
              your &nbsp;
              <a
                className="subtitle"
                href="https://www.fbi.gov/contact-us/field-offices"
              >
                local FBI office
              </a>
              or the nearest &nbsp;
              <a
                className="subtitle"
                href="https://www.fbi.gov/contact-us/international-offices"
              >
                American Embassy or Consulate
              </a>
              .
            </p>
          </div>
          <div className="card-content">
            {/* <p className="subtitle">{wanted.field_offices}</p> */}
            <p className="subtitle">
              Field Office: &nbsp;
              <a
                className="subtitle"
                href="https://www.fbi.gov/contact-us/field-offices/{wanted.field_offices}"
              >
                {wanted.field_offices}
              </a>
            </p>
          </div>
          <div className="card-content">
            <p className="title">Other info: </p>
            <p className="subtitle">{wanted.remarks}</p>
            {/* <p className="subtitle">{wanted.description}</p> */}
          </div>
        </div>
      </div>

      {/* <div className="card column is-one-third">
        <div className="card-content">
          <table className="table is-striped">
            <tbody>
              <tr>
                <td>Date(s) of Birth Used</td>
                <td>{wanted.dates_of_birth_used}</td>
              </tr>
              <tr>
                <td>Hair</td>
                <td>{wanted.hair}</td>
              </tr>
              <tr>
                <td>Eyes</td>
                <td>{wanted.eyes_raw}</td>
              </tr>
              <tr>
                <td>Height (inch)</td>
                <td>{wanted.height_max}</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>{wanted.weight}</td>
              </tr>
              <tr>
                <td>Sex</td>
                <td>{wanted.sex}</td>
              </tr>
              <tr>
                <td>Race</td>
                <td>{wanted.race}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}
    </>
  );
};

export default WantedShow;
