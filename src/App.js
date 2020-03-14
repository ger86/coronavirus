import React, {Component} from 'react';
import Data from './Data';
import App2 from './App2';
import './App.css';

class App extends Component {
  state = {
    deaths: null,
    confirmed: null,
    recovered: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const response = await fetch('https://enrichman.github.io/covid19/world/full.json');
      const data = await response.json();
      this.setState({
        deaths: data.deaths,
        confirmed: data.confirmed,
        recovered: data.recovered,
        loading: false
      });
    } catch (e) {
      console.log(e);
    }
  }

  componentWillUnmount() {
    console.log('will unmount');
  }

  render() {
    if (this.state.loading) {
      return <div>Cargando los datos de hoy...</div>;
    }
    return (
      <>
        <Data
          confirmed={this.state.confirmed}
          deaths={this.state.deaths}
          recovered={this.state.recovered}
        />
        <App2 />
      </>
    );
  }
}

export default App;
