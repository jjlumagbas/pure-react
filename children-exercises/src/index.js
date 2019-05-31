import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function ErrorBox({ children }) {
  return (
    <div className="error">
      <i className="fas fa-exclamation-triangle"></i>
      <span className="error-message">{children}</span>
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

ReactDOM.render(
  <>
    <ErrorBox>Something has gone wrong</ErrorBox>
    <FirstChildOnly><p>first</p><p>second</p></FirstChildOnly>
    <LastChildOnly><p>first</p><p>second</p></LastChildOnly>
    <Head number={3}><p>first</p><p>second</p><p>third</p></Head>
    <Tail number={2}><p>first</p><p>second</p><p>third</p></Tail>
  </>,
  document.getElementById('root')
);

