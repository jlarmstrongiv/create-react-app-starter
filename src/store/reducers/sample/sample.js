import * as actionTypes from 'store/actions/actionTypes';

const initialState = {};

const reduce = (state, action) => {
  return {};
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REDUCE:
      return reduce(state, action);
    default:
      return state;
  }
};

// https://github.com/redux-utilities/reduce-reducers
export default reducer;
