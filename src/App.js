
import './App.css';
import React, { Component } from 'react';
import Navbar from '../src/Components/Navbar';
import {BrowserRouter as Router , Switch ,Route} from 'react-router-dom';
import Applicants from '../src/Pages/Applicants';
import Dates from '../src/Pages/Dates';
import {changeLang} from './Redux/Language/LangAction';
import store from './Redux/Store';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

if (localStorage.chosenLanguage) {
  store.dispatch(changeLang(localStorage.chosenLanguage));
}
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { dir: 'ltr' };
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousProps !== this.props) {
      if (this.props.language === 'ar') {
        this.setState({ dir: 'rtl' });
      } else {
        this.setState({ dir: 'ltr' });
      }
    }
  }
  render() {
    return (
    <>
    <Router>
    <div
          className={
            ' App ' + (this.props.language === 'en' ? '' : 'arabicFont')
          }
        >
    <Navbar />
    <Switch>
      <Route path="/" exact component={Applicants} />
      <Route path="/date" component={Dates} />
    </Switch>
    </div>
    </Router>
   
    </>
  );
}
}
App.propTypes = {
  changeLang: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  language: state.lang.language
});
export default connect(mapStateToProps, { changeLang })(App);
