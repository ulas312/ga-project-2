import React from 'react';
// import { Link } from 'react-router-dom';

// const WantedCard = ({ name, image, category, _id }) => (
const WantedCard = ({ name, image }) => (
  <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
    {/* <Link to={`/wantedList/${_id}`}> */}
    <div className="card">
      <div className="card-header">
        <h4 className="card-header-title">{name}</h4>
      </div>
      <div className="card-image">
        <figure className="image image is-1by1">
          <img src={image} alt={name} loading="lazy" width="255" height="255" />
        </figure>
      </div>
    </div>
    {/* </Link> */}
  </div>
);
export default WantedCard;

// <div className="card-content">
//   <h5 className="">{category}</h5>
// </div>;
