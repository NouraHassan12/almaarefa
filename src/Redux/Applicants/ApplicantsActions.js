import {
    FETCH_APPLICANTS_REQUEST,
    FETCH_APPLICANTS_SUCCESS,
    FETCH_APPLICANTS_FAILURE
  } from "./ApplicantsActiontypes";

  import axios from "axios";

  export const fetchApplicantsRequest = () => {
    return {
      type:  FETCH_APPLICANTS_REQUEST,
    };
  };


  const fetchApplicantsSuccess = (applicants) => {
    return {
      type:  FETCH_APPLICANTS_SUCCESS,
      payload: applicants,
    };
  };

  const fetchApplicantsFailure = (error) => {
    return {
      type:  FETCH_APPLICANTS_FAILURE,
      payload: error,
    };
  };


  export const fetchApplicants = () => {
    return (dispatch) => {
      dispatch(fetchApplicantsRequest);
  
      axios
        .get("https://jsonplaceholder.typicode.com/users")
  
        .then((res) => {
          console.log(res.data, "applicants");
          const applicants = res.data;
          dispatch(fetchApplicantsSuccess(applicants));
        })
  
        .catch((error) => {
          const errorMsg = error.message;
          dispatch(fetchApplicantsFailure(errorMsg));
        });
    };
  };