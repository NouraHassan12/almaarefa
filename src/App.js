
import './App.css';
import React, { Component } from 'react';
import Navbar from '../src/Components/Navbar';
import {BrowserRouter as Router , Switch ,Route} from 'react-router-dom';
import Applicants from '../src/Pages/Applicants';
import Dates from '../src/Pages/Dates';


class App extends Component {


  render() {
    return (
    <>
    <Router>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Applicants} />
      <Route path="/date" component={Dates} />
    </Switch>
    </Router>
   
    </>
  );
}
}

export default App;
