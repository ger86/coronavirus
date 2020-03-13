import React, {Component} from 'react';
import './App.css';

class App extends Component {

  state = {
    count: 10
  };

  componentDidMount() {
    console.log('hola mundo');
  }

  componentWillUnmount() {
    console.log('will unmount');
  }

  handleInput = event => {
    const value = event.target.value;
    this.setState({count: value});
  }

  render() {
    return (
      <>
        <div>El valor del contador es: {this.state.count}</div>
        <input type="text" onChange={this.handleInput} ></input>
      </>

    )
  }
}

export default App;
