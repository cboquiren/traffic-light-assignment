import { Component } from 'react';

export class ClassTrafficLight extends Component {
  state = {
    light: 1,
  }

  render() {
    return (
      <div className='traffic-light-box'>
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          <div className={`circle ${this.state.light === 1 ? 'red' : 'black'}`}></div>
          <div className={`circle ${this.state.light === 2 ? 'yellow' : 'black'}`}></div>
          <div className={`circle ${this.state.light === 3 ? 'green' : 'black'}`}></div>
        </div>
        <button className="next-state-button" onClick={() => {
          if (this.state.light === 1) {
            this.setState({light: 3});
          } else {
            this.setState({light: this.state.light - 1});
          }
        }}>Next State</button>
      </div>
    )
  }
}