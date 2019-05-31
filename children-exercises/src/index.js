import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';

function ErrorBox({ children }) {
  return (
    <div className='error'>
      <i className='fas fa-exclamation-triangle'></i>
      <span className='error-message'>{children}</span>
    </div>
  );
}

function FirstChildOnly({ children }) {
  return (
    React.Children.toArray(children)[0]
  );
}

function LastChildOnly({ children }) {
  const childrenArr = React.Children.toArray(children);
  return (
    childrenArr[childrenArr.length - 1]
  );
}

function Head({ number, children }) {
  return (
    React.Children.toArray(children).slice(0, number)
  );
}

function Tail({ number, children }) {
  const length = React.Children.count(children);
  return (
    React.Children.toArray(children).slice(length - number, length)
  );
}

const Title = ({ children }) => <h2>{children}</h2>;
Title.propTypes = {
  children: PropTypes.string
};

const Body = ({ children }) => <p>{children}</p>;
Body.propTypes = {
  children: PropTypes.node
};

const Footer = ({ children }) => <footer>{children}</footer>;
Footer.propTypes = {
  children: PropTypes.node
}


function Dialog({ children }) {
  return (
    <section className='dialog'>
      {children}
    </section>
  );
}

Dialog.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element)
  ])
};

ReactDOM.render(
  <>
    <ErrorBox>Something has gone wrong</ErrorBox>
    <FirstChildOnly><p>first</p><p>second</p></FirstChildOnly>
    <LastChildOnly><p>first</p><p>second</p></LastChildOnly>
    <Head number={3}><p>first</p><p>second</p><p>third</p></Head>
    <Tail number={2}><p>first</p><p>second</p><p>third</p></Tail>
    <Dialog>
      <Title>This is important</Title>
      <Body>Important text</Body>
      <Footer><button>Close</button></Footer>
    </Dialog>
  </>,
  document.getElementById('root')
);

