
import React,{Component} from 'react';
import { connect } from 'react-redux';
import { changeLang } from '../Redux/Language/LangAction';
import PropTypes from 'prop-types';


const text = require('../Lang.json');

  
class Dates extends Component {
    constructor(props) {
        super(props);

        this.state = {
          text: text.en
        };
      }

    
      componentDidUpdate(previousProps, previousState) {
        if (previousProps !== this.props) {
          if (this.props.language === 'ar') {
            this.setState({ text: text.ar });
          } else {
            this.setState({ text: text.en });
          }
        }
      }
    
    
    
      
        render() {
      return (
        <div className="dates">
            <h1> {this.state.text.dates}</h1>
        </div>

      )
        }
    }

    Dates.propTypes = {
        changeLang: PropTypes.func.isRequired
      };
    
    const mapStateToProps = (state) => {
        return {
            applicantsData: state.applicants,
            language: state.lang.language
        };
      };
    
      const mapDispatchToProps = (dispatch) => {
        return {
            changeLang:()=> dispatch(changeLang())
        };
      };
      export default connect(mapStateToProps, mapDispatchToProps)(Dates);
    