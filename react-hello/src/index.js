import React from 'react';
import ReactDOM from 'react-dom';


function Hello() {
  return (
    <span>Hello</span>
  );
}

function World() {
  return (
    <span>World</span>
  );
}

function Name() {
  const name = "JJ";
  return (
    <span>{name}</span>
  )
}

function HelloWorld() {
  return (
    <>
        <Hello/> <Name/>
    </>
  );
  // return React.createElement(
  //   'div',
  //   {},
  //   'Hello',
  //   'World'
  // );
}


ReactDOM.render(
  <HelloWorld/>,
  document.querySelector('#root')
);