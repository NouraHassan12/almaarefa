import {
    FETCH_APPLICANTS_REQUEST,
    FETCH_APPLICANTS_SUCCESS,
    FETCH_APPLICANTS_FAILURE
  } from "./ApplicantsActiontypes";

  const initialState = {
    loading: false,
    applicants: [],
    error: "",
  };

  const reducer = (state = initialState, action) => {

    switch (action.type) {
        case  FETCH_APPLICANTS_REQUEST:
          return {
            ...state,
            loading: true,
            
          };

          case  FETCH_APPLICANTS_SUCCESS:
            return {
              loading: false,
              applicants: action.payload,
              error: "",
            };

            
    case  FETCH_APPLICANTS_FAILURE:
        return {
          loading: false,
          applicants: [],
          error: action.payload,
        };

        default:
      return state;
  }
};

export default reducer;