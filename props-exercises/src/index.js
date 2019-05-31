import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';


function AddressLabel({ address }) {
  const { name, street, city, state, zip } = address;
  return (
    <>
      {name}<br />
      {street}<br />
      {`${city}, ${state} ${zip}`}
    </>
  );
}

AddressLabel.propTypes = {
  address: PropTypes.shape({
    name: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    zip: PropTypes.string.isRequired
  })
};


function Envelope({ from, to }) {
  return (
    <div className="envelope">
      <div className="stamp" />
      <p className="envelope-from"><AddressLabel address={from} /></p>
      <p className="envelope-to"><AddressLabel address={to} /></p>
    </div>
  );
}


const addr1 = {
  name: 'JJ Lumagbas',
  street: '9384 Sugar Rd.',
  city: 'Edinburg',
  state: 'TX',
  zip: 78539
};

const addr2 = {
  name: 'Rae Lumagbas',
  street: '2001 Sugar Rd.',
  city: 'Edinburg',
  state: 'TX',
  zip: 78539
};



ReactDOM.render(
  <Envelope from={addr1} to={addr2} />,
  document.getElementById('root')
);