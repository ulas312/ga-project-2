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
          <p className="title">Jeff Atwood </p>
          <p className="subtitle">
            “There are two hard things in computer science: cache invalidation,
            naming things, and off-by-one errors.”
          </p>
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
                src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
                alt="Placeholder image"
              />
            </figure>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <p className="title">Jeff Atwood </p>
            <p className="subtitle">
              “There are two hard things in computer science: cache
              invalidation, naming things, and off-by-one errors.”
            </p>
          </div>
          <div className="card-content">
            <p className="title">Jeff Atwood </p>
            <p className="subtitle">
              “There are two hard things in computer science: cache
              invalidation, naming things, and off-by-one errors.”
            </p>
          </div>
          <div className="card-content">
            <p className="title">Jeff Atwood </p>
            <p className="subtitle">
              “There are two hard things in computer science: cache
              invalidation, naming things, and off-by-one errors.”
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WantedShow;
