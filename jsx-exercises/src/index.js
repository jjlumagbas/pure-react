import React from 'react';
import ReactDOM from 'react-dom';


function Book() {
  return (
    <div className='book'>
      <div className='title'>
        The Title
      </div>
      <div className='author'>
        The Author
      </div>
      <ul className='stats'>
        <li className='rating'>
          5 stars
        </li>
        <li className='isbn'>
          12-345678910
        </li>
      </ul>
    </div>
  );
}

function BookJsx() {
  return React.createElement(
    'div',
    { className: 'book' },
    React.createElement(
      'div',
      { className: 'title' },
      'The Title'
    ),
    React.createElement(
      'ul',
      { className: 'stats' },
      React.createElement( 'li', { className: 'rating' }, '5 stars'),
      React.createElement( 'li', { className: 'isbn' }, '12-345678910')
    )
  )
}


ReactDOM.render(
  <><Book/><BookJsx/></>,
  document.getElementById('root')
);