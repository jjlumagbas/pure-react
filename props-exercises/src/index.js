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

function cardNumString(cardNum) {
  const fourChars = /.{4}/g;
  return cardNum.toString().match(fourChars).join(' ');
}

function CreditCard({ cardInfo }) {
  return (
    <div className="credit-card">
      <span className="bank">Big Bank, Inc.</span>
      <span className="card-num">{cardNumString(cardInfo.cardNum)}</span>
      <span className="cvv">{cardInfo.cvv}</span>
      <span className="valid">Valid thru</span>
      <span className="expiry">{cardInfo.expiry}</span>
      <span className="name">{cardInfo.name}</span>
    </div>
  );
}

CreditCard.propTypes = {
  cardInfo: PropTypes.shape({
    cardNum: PropTypes.number,
    cvv: PropTypes.number,
    expiry: PropTypes.string,
    name: PropTypes.string
  })
};


const addr1 = {
  name: 'JJ Lumagbas',
  street: '9384 Sugar Rd.',
  city: 'Edinburg',
  state: 'TX',
  zip: '78539'
};

const addr2 = {
  name: 'Rae Lumagbas',
  street: '2001 Sugar Rd.',
  city: 'Edinburg',
  state: 'TX',
  zip: '78539'
};

const cardInfo1 = {
  cardNum: 1234567887654321,
  cvv: 1234,
  expiry: '08/19',
  name: 'Cardholder Name'
}




ReactDOM.render(
  <>
    <Envelope from={addr1} to={addr2} />
    <CreditCard cardInfo={cardInfo1} />
  </>,
  document.getElementById('root')
);