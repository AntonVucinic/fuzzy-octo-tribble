import React from 'react';
import './App.css';

import UserInput from './components/userInput.jsx';
import StartTitle from './components/startTitle.jsx';
import CrossborderTransactions from './components/crossborderTransactions';
import Deadlines from './components/deadlines.jsx';
import Exemptions from './components/exemptions.jsx';
import InvoiceRequirements from './components/invoiceRequirements.jsx';
import Penalties from './components/penalties.jsx';
import RegistrationRequirements from './components/registrationRequirements.jsx';
import Returns from './components/returns.jsx';
import VATRates from './components/vatRates.jsx';

const App = () => {
  const data = {
    cross_border_transactions: {
      electronic_services: true,
      exports: 1.23,
      imports: 1.23
    },
    deadlines: {
      filing_deadline: "20th of the month following the tax period",
      payment_deadline: "last day of the month following the tax period"
    },
    exemptions: [
      "certain goods and services of public interest",
      "transactions within the EU between registered businesses",
      "exports",
      "certain financial transactions"
    ],
    invoice: [
      "Must be issued for most taxable transactions",
      "Must include specific information (date, amount, description of goods or services, etc.)",
      "Can be paper or electronic",
      "Simplified invoices allowed for small transactions"
    ],
    penalties: "Vary depending on the nature of the infraction, ranging from fines to imprisonment",
    registration_requirements: {
      establishment_class: "all taxable businesses",
      threshold: 40000.0
    },
    returns: {
      annual_return: true,
      filing: {
        applies_to: ["all registered VAT payers"],
        deadlines: [
          {
            filing_deadline: "20th of the month following the quarter",
            payment_deadline: "last day of the month following the quarter"
          }
        ],
        electronic_filing: true,
        filing_frequency: "monthly or quarterly depending on turnover",
        penalties: ["fines for late or incorrect filing"]
      },
      language: "Croatian",
      payment_currency: "Euro",
      payment_deadline: "last day of the month following the tax period"
    },
    vatRates: [
      { desc: "Standard rate", rate: 25.0, type_: "Standard" },
      { desc: "Reduced rate", rate: 13.0, type_: "Special" },
      { desc: "Super reduced rate", rate: 5.0, type_: "Special" }
    ]
  };

  return (
    <>
      <StartTitle />
      <UserInput />
      <CrossborderTransactions data={data.cross_border_transactions} />
      <Deadlines data={data.deadlines} />
      <Exemptions exemptions={data.exemptions} />
      <InvoiceRequirements invoice={data.invoice} />
      <Penalties penalties={data.penalties} />
      <RegistrationRequirements data={data.registration_requirements} />
      <Returns data={data.returns} />
      <VATRates vatRates={data.vatRates} />
    </>
  );
};

export default App;