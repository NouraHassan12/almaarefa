
import React,{Component} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import '../Stylesheets/Navbar.css';
import { IconContext } from 'react-icons';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeLang } from '../Redux/Language/LangAction';
import PropTypes from 'prop-types';



const text = require('../Lang.json');

  
class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
          sidebar:false,
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


      onChange = e => {
        return this.changeLanguage(e);
      };
      changeLanguage = e => {
        e.preventDefault();
        this.props.changeLang(e.target.id);
      };
      componentDidMount() {
        this.checklang();
      }
    

     showSidebar =() => {
          this.setState({sidebar : !this.state.sidebar})
                        }

render(){
  return (
      <>
      <IconContext.Provider value={{ color: '#fff' }}>
    <div className='navbar'>

    <Link to='#' className='menu-user'>
      <FaIcons.FaUser onClick={this.showSidebar} /> 
    </Link>

               <div className="nav-text">
                <Link
                  className={this.props.language === 'ar' ? 'lanStyle' : ''}
                  id="ar"
                  onClick={this.onChange}
                >
                AR
                </Link>

                <Link
                  className={this.props.language === 'en' ? 'lanStyle' : ''}
                  onClick={this.onChange}
                  id="en"
                >
                  EN
                </Link>
              </div>
  </div>

<nav className={this.state.sidebar ? 'nav-menu active' : 'nav-menu'}>
<ul className='nav-menu-items' onClick={this.showSidebar}>
  <li className='navbar-toggle'>
    <Link className="admin-toggle">
    <p>  <FaIcons.FaUserCog /> Admission male <AiIcons.AiOutlineArrowRight/></p>
    
    </Link> 
    </li>


                <li className="nav-text" >
                  <Link to="/">
                  <FaIcons.FaUsers />
                    <span >{this.state.text.Applicants}</span>
                  </Link>
                </li>

                
                <li className="nav-text" >
                  <Link to="/date">
                  <FaIcons.FaCalendar />
                    <span >{this.state.text.dates}</span>
                  </Link>
                </li>
  </ul>


</nav>
</IconContext.Provider>
</>
  );
}
}
Navbar.propTypes = {
    changeLang: PropTypes.func.isRequired
  };
  
  const mapStateToProps = state => ({
    language: state.lang.language
  });
  
  export default connect(mapStateToProps, { changeLang })(withRouter(Navbar));
