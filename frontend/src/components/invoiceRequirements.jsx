import React from 'react';

const InvoiceRequirements = ({ invoice }) => {
  return (
    <div className="container mt-4">
      <h3>Invoice Requirements</h3>
      <ul className="list-group">
        {invoice.map((item, index) => (
          <li key={index} className="list-group-item">
            <div className="row">
              <div className="col-4"><strong>Requirement {index + 1}:</strong></div>
              <div className="col-8">{item}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvoiceRequirements;
