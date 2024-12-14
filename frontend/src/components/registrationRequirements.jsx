import React from 'react';

const RegistrationRequirements = ({ data }) => {
  return (
    <div className="container mt-4">
      <h3>Registration Requirements</h3>
      <ul className="list-group">
        <li className="list-group-item">
          <div className="row">
            <div className="col-4"><strong>Establishment Class:</strong></div>
            <div className="col-8">{data.establishment_class}</div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col-4"><strong>Threshold:</strong></div>
            <div className="col-8">{data.threshold}</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default RegistrationRequirements;
