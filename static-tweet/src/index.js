import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Tweet() {
  return (
    <article className="tweet">
      Tweet
    </article>
  );
}

ReactDOM.render(
  <Tweet/>, 
  document.querySelector('#root')
);