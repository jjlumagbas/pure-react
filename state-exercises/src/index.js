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
    return (
      <ul>
        <Light onAction={this.toggleLight('kitchen')} turnedOn={this.state.kitchen}>Kitchen</Light>
        <Light onAction={this.toggleLight('bathroom')} turnedOn={this.state.bathroom}>Bathroom</Light>
        <Light onAction={this.toggleLight('livingRoom')} turnedOn={this.state.livingRoom}>Living Room</Light>
        <Light onAction={this.toggleLight('bedroom')} turnedOn={this.state.bedroom}>Bedroom</Light>
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