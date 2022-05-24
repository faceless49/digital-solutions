import { combineReducers } from 'redux';

import { usersReducer } from 'store/reducers';

export const rootReducer = combineReducers({
  users: usersReducer,
  // app: appReducer,
});
