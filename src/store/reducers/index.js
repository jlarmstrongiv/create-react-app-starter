import { combineReducers, } from 'redux';
// import { reducer as formReducer, } from 'redux-form';

import sample from 'store/reducers/sample/sample';

const rootReducer = combineReducers({ sample, /* form: formReducer */});

export default rootReducer;
