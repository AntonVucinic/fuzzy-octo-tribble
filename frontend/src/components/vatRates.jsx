import React from 'react';

const VATRates = ({ vatRates }) => {
  return (
    <div className="container mt-4">
      <h3>VAT Rates</h3>
      <ul className="list-group">
        {vatRates.map((rate, index) => (
          <li key={index} className="list-group-item">
            <div className="row">
              <div className="col-4"><strong>{rate.desc}:</strong></div>
              <div className="col-8">{rate.rate}% ({rate.type_} rate)</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VATRates;
