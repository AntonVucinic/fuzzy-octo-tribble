import React from 'react';

const Penalties = ({ penalties }) => {
  return (
    <div className="container mt-4">
      <h3>Penalties</h3>
      <ul className="list-group">
        <li className="list-group-item">
          <div className="row">
            <div className="col-4"><strong>Penalties Description:</strong></div>
            <div className="col-8">{penalties}</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Penalties;
