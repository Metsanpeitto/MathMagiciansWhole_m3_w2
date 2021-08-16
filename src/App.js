import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Quote from './pages/Quote';
import Calculator from './pages/CalculatorLayout';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/calculator" component={Calculator} />
          <Route path="/quote" component={Quote} />
        </Switch>
      </div>
    );
  }
}
export default App;
