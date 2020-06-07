import React, { Component } from 'react';
import './App.sass';

class App extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
    this.values = [5, -5];
  }

  onStateChange(i) {
    this.setState(({ count }) => {
      return {
        count: count + i,
      };
    });
  }
  

  render() {
    const { count } = this.state;

    return (
      <div className="App">
        <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m uk-margin-medium-top my-wrapp">
          <h3 className="uk-card-title">Counter</h3>
          <div className="uk-text-large uk-text-bold uk-text-success ">
            {" "}
            {count}{" "}
          </div>
          <div className="btn-box uk-margin-small-top">
            <button
              className="uk-button uk-button-secondary uk-width-1-3"
              onClick={() => this.onStateChange(
                +this.values.filter((item) => item > 0)
              )}
            >
              +
            </button>
            <button
              className="uk-button uk-button-primary uk-width-1-3"
              onClick={() => this.onStateChange(
                 +this.values.filter((item) => item < 0)
              )}
            >
              -
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
