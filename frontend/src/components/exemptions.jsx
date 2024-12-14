import React from 'react';

const Exemptions = ({ exemptions }) => {
  return (
    <div className="container mt-4">
      <h3>Exemptions</h3>
      <ul className="list-group">
        {exemptions.map((exemption, index) => (
          <li key={index} className="list-group-item">
            <div className="row">
              <div className="col-4"><strong>Exemption {index + 1}:</strong></div>
              <div className="col-8">{exemption}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Exemptions;
