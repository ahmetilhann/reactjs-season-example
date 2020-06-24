import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  state = {
    lat: null,
    errorMessage: null,
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log('lalla', position);
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        console.log('adasd');
        this.setState({ errorMessage: err.message });
      },
    );
  }

  render() {
    
    if (this.state.errorMessage) {
      return (
        <div>{this.state.errorMessage}</div>
      );
    }

    if (!this.state.lat) {
      return (
        <Spinner />
      );
    }

    return (
      <SeasonDisplay lat={this.state.lat} />
    );
  }
}

export default ReactDOM.render(<App />, document.querySelector('#root'));