import axios from 'axios';
import * as actionTypes from 'store/actions/actionTypes';

// check to see if state already exists == do nothing
// if no state, then check localStorage and set state and re-verify with server
// if no state or local storage, clear everything for good measure

export const sampleIsLoading = payload => {
  return {
    type: actionTypes.SAMPLE_IS_LOADING,
    payload,
  };
};

export const sampleIsError = payload => {
  return {
    type: actionTypes.SAMPLE_IS_ERROR,
    payload,
  };
};

export const sampleInit = () => {
  return async (dispatch, getState) => {
    try {
      const { sample, } = getState();
      dispatch(sampleIsError(false));
      dispatch(sampleIsLoading(true));
      // do something
      dispatch(sampleIsLoading(false));
    } catch (error) {
      dispatch(sampleIsError(true));
      dispatch(sampleIsLoading(false));
      // console.error(error);
    }
  };
};
