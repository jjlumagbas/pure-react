import React from 'react';
import ReactDOM from 'react-dom';

class House extends React.Component {
  state = {
    kitchen: true,
    bathroom: false,
    livingRoom: true,
    bedroom: false
  }


  toggleLight(room) {
    const toggle = (action) => {
      this.setState((state, props) => {
        return {
          [room]: !state[room]
        }
      });
    }

    return toggle;
  }


  render() {
    const lights = Object.keys(this.state).map(key =>
      <Light onAction={this.toggleLight(key)} turnedOn={this.state[key]} key={key}>{key}</Light>
    );

    return (
      <ul>
        {lights}
      </ul>
    );
  }
}

function Light({ onAction, turnedOn, children }) {
  return (
    <li>
      <Switch onAction={onAction}>{children}</Switch>
      <Bulb turnedOn={turnedOn} />
    </li>
  );
}

const Switch = ({ onAction, children }) =>
  <button onClick={onAction}>{children}</button>;

const Bulb = ({ turnedOn }) =>
  <span>{turnedOn ? 'On' : 'Off'}</span>;

ReactDOM.render(<House />, document.getElementById('root'));