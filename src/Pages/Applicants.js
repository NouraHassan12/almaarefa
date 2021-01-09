
import React, {Component} from "react";
import {fetchApplicants} from '../Redux/Applicants/ApplicantsActions';
import { connect } from "react-redux";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import {changeLang} from '../Redux/Language/LangAction';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
const text = require('../Lang.json');


class Applicants extends Component {

    constructor(props){
       super(props)
       this.state={
        page:0,
        rowsPerPage:10,
        text: text.en
       }
    }



   handleChangePage = (event, newPage) => {
    this.setState({page:newPage})
  };

   handleChangeRowsPerPage = (event) => {

    this.setState({rowsPerPage:+event.target.value})  
    this.setState({page:0}) 
  };



  

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
    this.props.fetchApplicants();
    this.checklang();
  }
  
    render() {
  return (
    <div className="applicants">
      <Paper  style={{width: '80%'}}>
      <TableContainer style={{ height: "500px"}}>
        <Table stickyHeader aria-label="sticky table">
         <TableHead>
           <TableRow>
             <TableCell align="center"> {this.state.text.name}</TableCell>
             <TableCell align="center"> {this.state.text.status}</TableCell>
             <TableCell align="center">{this.state.text.email}</TableCell>
           </TableRow>
         </TableHead>

         <TableBody>
                {this.props.applicantsData.loading ? (
                    <h2>Loading</h2>
                  ) : this.props.applicantsData.error ? (
                    <h2>{this.props.applicantsData.error}</h2>
                  ) : (
                    this.props.applicantsData &&
                    this.props.applicantsData.applicants &&
                    this.props.applicantsData.applicants.map(applicant=>(
                   <TableRow key={applicant.id}>
                   <TableCell align="center">{applicant.name}</TableCell>
                   <TableCell align="center">{applicant.username}</TableCell>
                   <TableCell align="center">{applicant.email}</TableCell>
                 </TableRow>
               )))
             } 
         </TableBody>
       </Table>
     </TableContainer>
     <TablePagination
       rowsPerPageOptions={[10, 15, 25]}
        component="div"
        count={this.props.applicantsData.applicants.length}
        rowsPerPage={this.state.rowsPerPage}
        page={this.state.page}
        onChangePage={this.handleChangePage}
        onChangeRowsPerPage={this.handleChangeRowsPerPage}
      />
     </Paper>
     
    </div>
  );
}

}

Applicants.propTypes = {
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
        fetchApplicants: () => dispatch(fetchApplicants()),
        changeLang:()=> dispatch(changeLang())
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Applicants));
