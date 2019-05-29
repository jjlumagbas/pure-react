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

function Greeting() {
  let username = 'root';  // Hello root
  // let username = undefined; // Not logged in
  // let username = null; // Not logged in
  // let username = false; // Not logged in
  return (
    <span>{ username ? 'Hello ' + username : "Not logged in" }</span>
    // I don't like the below convention, prefer above
    // <span>
    //   { username && 'Hello ' + username }
    //   { !username && 'Not logged in' }
    // </span>
  );
}

function Data() {
  return <td>Eggs</td>;
}

function Table() {
  return (
    <table>
      <tbody>
        <tr>
          <Data/>
          <Data/>
          <Data/>
        </tr>
      </tbody>
    </table>
  );
}

ReactDOM.render(
  <>
    <Greeting/>
    <Book/>
    <BookJsx/>
    <Table/>
  </>,
  document.getElementById('root')
);