import React from 'react';
const CrossborderTransactions = ({ data }) => {
    return (
    <div className="container mt-4">
      <h3>Cross-border Transactions</h3>
      <ul className="list-group">
        <li className="list-group-item">
          <div className="row">
            <div className="col-4"><strong>Electronic Services:</strong></div>
            <div className="col-8">{data.electronic_services ? 'Yes' : 'No'}</div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col-4"><strong>Exports:</strong></div>
            <div className="col-8">{data.exports}</div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col-4"><strong>Imports:</strong></div>
            <div className="col-8">{data.imports}</div>
          </div>
        </li>
      </ul>
    </div>
    );
};

export default CrossborderTransactions;
