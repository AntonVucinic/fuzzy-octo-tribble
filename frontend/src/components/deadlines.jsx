import React from 'react';

const Deadlines = ({ data }) => {
  return (
    <div className="container mt-4">
      <h3>Deadlines</h3>
      <ul className="list-group">
        <li className="list-group-item">
          <div className="row">
            <div className="col-4"><strong>Filing Deadline:</strong></div>
            <div className="col-8">{data.filing_deadline}</div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col-4"><strong>Payment Deadline:</strong></div>
            <div className="col-8">{data.payment_deadline}</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Deadlines;
