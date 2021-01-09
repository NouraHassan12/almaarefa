import { combineReducers } from "redux";
import applicantReducer from './Applicants/ApplicantsReducer';
import langReducer from './Language/LangReducer';



const rootReducer = combineReducers({
    applicants: applicantReducer,
    lang: langReducer,
 
  });
  
  export default rootReducer;
