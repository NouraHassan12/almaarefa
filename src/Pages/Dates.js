// import React from 'react';

// function Dates() {
//   return (
//     <div className="dates">
//       Date
//     </div>
//   );
// }

// export default Dates;


import React,{Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
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

      checklang = () => {
        if (this.props.language === 'en') {
          this.setState({ text: text.en });
        } else {
          this.setState({ text: text.ar });
        }
      };
    
      componentDidUpdate(previousProps, previousState) {
        if (previousProps !== this.props) {
          if (this.props.language === 'ar') {
            this.setState({ text: text.ar });
          } else {
            this.setState({ text: text.en });
          }
        }
      }
    
      changeLanguage = e => {
        e.preventDefault();
        this.props.changeLang(e.target.id);
      };
    
      componentDidMount() {
        window.scrollTo(0, 0);
        this.checklang();
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
      export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Dates));
    