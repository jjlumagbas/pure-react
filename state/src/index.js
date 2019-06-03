import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class CountingParent extends React.Component {
  state = {
    actionCount: 0
  }

  handleAction = (action) => {
    console.log('Child says', action);

    this.setState({
      actionCount: this.state.actionCount + 1
    });
  }

  reset = () => {
    this.setState({
      actionCount: 0
    });
  }

  render() {
    return (
      <div>
        <Child onAction={this.reset}>Reset</Child>
        <Child onAction={this.handleAction}>Click me!</Child>
        <p>Clicked {this.state.actionCount} times</p>
      </div>
    );
  }
}


function Child({ onAction, children }) {
  return (
    <button onClick={onAction}>{children}</button>
  );
}

const Page = () => (
  <div>
    <CountingParent />
    <CountingParent />
    <CountingParent />
  </div>
);

ReactDOM.render(<Page />, document.getElementById('root'));
