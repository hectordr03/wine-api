import React from 'react';
import './App.css';

import Wines from './components/Wines';
import axios from 'axios';

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
        <Wines info={this.state.info} />
      </div>
    );
  }
}

export default App;
