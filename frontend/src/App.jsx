import React from 'react';
import './App.css';
import { useState } from 'react';

import UserInput from './components/userInput.jsx';
import StartTitle from './components/startTitle.jsx';
import CrossborderTransactions from './components/crossborderTransactions';
import Exemptions from './components/exemptions.jsx';
import InvoiceRequirements from './components/invoiceRequirements.jsx';
import Penalties from './components/penalties.jsx';
import RegistrationRequirements from './components/registrationRequirements.jsx';
import Returns from './components/returns.jsx';
import VATRates from './components/vatRates.jsx';

const App = () => {

  const [data, setData] = useState(null);

  return (
    <>
      <StartTitle />
      <UserInput setData={setData} />
      {data ?
        <>
          {data.cross_border_transactions ? <CrossborderTransactions data={data.cross_border_transactions} /> : null}
          {/*data.exemptions ? <Exemptions exemptions={data.exemptions} /> : null*/}
          {data.invoice_requirements ? <InvoiceRequirements invoice={data.invoice_requirements} /> : null}
          {data.penalties ? <Penalties penalties={data.penalties} /> : null}
          {data.registration_requirements ? <RegistrationRequirements data={data.registration_requirements} /> : null}
          {data.returns ? <Returns data={data.returns} /> : null}
          {data.vatRates ? <VATRates vatRates={data.vatRates} /> : null}
        </>
        : null}
    </>
  );
};

export default App;
