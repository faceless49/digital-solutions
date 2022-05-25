import { combineReducers } from 'redux';

import { commentsReducer, postsReducer, usersReducer } from 'store/reducers';

export const rootReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer,
});
