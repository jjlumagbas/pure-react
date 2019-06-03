import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function handleAction(event) {
  console.log('child did:', event);
}

function Parent() {
  return (
    <Child onAction={handleAction} />
  );
}

function Child({ onAction }) {
  return (
    <button onClick={onAction}>
      Click Me!
    </button>
  );
}

ReactDOM.render(<Parent />, document.getElementById('root'));
