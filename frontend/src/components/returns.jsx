/*
import React from 'react';

const Returns = ({ data }) => {
  return (
    <div className="container mt-4">
      <h3>Returns</h3>
      <ul className="list-group">
        <li className="list-group-item">
          <div className="row">
            <div className="col-4"><strong>Annual Return:</strong></div>
            <div className="col-8">{data.annual_return ? 'Yes' : 'No'}</div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col-4"><strong>Filing Frequency:</strong></div>
            <div className="col-8">{data.filing_frequency}</div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col-4"><strong>Language:</strong></div>
            <div className="col-8">{data.language}</div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col-4"><strong>Payment Currency:</strong></div>
            <div className="col-8">{data.payment_currency}</div>
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

export default Returns;
*/
import React from 'react';

const Returns = ({ data }) => {
  return (
    <div className="container mt-4">
      <h3>Returns Information</h3>
      <ul className="list-group">
        {/* Annual Return */}
        <li className="list-group-item">
          <div className="row custom-bg">
            <div className="col-4 custom-bg"><strong>Annual Return:</strong></div>
            <div className="col-8">{data.annual_return ? 'Yes' : 'No'}</div>
          </div>
        </li>

        {/* Filing Applies To */}
        <li className="list-group-item">
          <div className="row">
            <div className="col-4"><strong>Filing Applies To:</strong></div>
            <div className="col-8">{data.filing.applies_to.join(', ')}</div>
          </div>
        </li>

        {/* Filing Deadlines */}
        <li className="list-group-item">
          <div className="row">
            <div className="col-4"><strong>Filing Deadline:</strong></div>
            <div className="col-8">{data.filing.deadlines[0].filing_deadline}</div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col-4"><strong>Payment Deadline:</strong></div>
            <div className="col-8">{data.filing.deadlines[0].payment_deadline}</div>
          </div>
        </li>

        {/* Electronic Filing */}
        <li className="list-group-item">
          <div className="row">
            <div className="col-4"><strong>Electronic Filing:</strong></div>
            <div className="col-8">{data.filing.electronic_filing ? 'Yes' : 'No'}</div>
          </div>
        </li>

        {/* Filing Frequency */}
        <li className="list-group-item">
          <div className="row">
            <div className="col-4"><strong>Filing Frequency:</strong></div>
            <div className="col-8">{data.filing.filing_frequency}</div>
          </div>
        </li>

        {/* Penalties */}
        {data.filing.penalties ?
          <li className="list-group-item">
            <div className="row">
              <div className="col-4"><strong>Penalties:</strong></div>
              <div className="col-8">{data.filing.penalties.join(', ')}</div>
            </div>
          </li>
          : null}

        {/* Language */}
        <li className="list-group-item">
          <div className="row">
            <div className="col-4"><strong>Language:</strong></div>
            <div className="col-8">{data.language}</div>
          </div>
        </li>

      </ul>
    </div>
  );
};

export default Returns;
