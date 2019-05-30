import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';


function AddressLabel({ address }) {
  const { name, street, city, state, zip } = address;
  return (
    <p className="address">
      {name}<br />
      {street}<br />
      {`${city}, ${state} ${zip}`}
    </p>
  );
}

AddressLabel.propTypes = {
  address: PropTypes.shape({
    name: PropTypes.string.isRequired
  })
};

const addr1 = {
  name: 'JJ Lumagbas',
  street: '9384 Sugar Rd.',
  city: 'Edinburg',
  state: 'TX',
  zip: 78539
};


ReactDOM.render(<AddressLabel address={addr1} />, document.getElementById('root'));