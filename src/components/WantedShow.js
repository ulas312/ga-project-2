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
          <p className="subtitle">{wanted.title}</p>
          <p className="warning">{wanted.warning_message}</p>
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
            <p className="subtitle">{wanted.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WantedShow;
