import React from 'react';
import './App.css';

import axios from 'axios';
// import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      info: [],
    }
  }

  componentDidMount() {
    axios.get('http://myapi-profstream.herokuapp.com/api/aeee9e/wines')
      .then(res => {
        this.setState({
          info: res.data
        })
        console.log(res.data)
      })
      .catch(err => console.error(err.message))
  }

  render() {
    return (
      <div className="App">
        <h1>Hi</h1>
      </div>
    );
  }
}

export default App;
