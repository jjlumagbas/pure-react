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

function HelloWorld() {
  return (
    <div><Hello/> <World/></div>
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