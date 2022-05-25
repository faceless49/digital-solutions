import { slice as commentsSlice, asyncActions as commentsAsyncActions } from './comments';
import { slice as postsSlice, asyncActions as postsAsyncActions } from './posts';
import { slice as usersSlice, asyncActions as usersAsyncActions } from './users';

const postsActions = {
  ...postsAsyncActions,
};

const usersActions = {
  ...usersAsyncActions,
};

const commentsActions = {
  ...commentsAsyncActions,
};

const usersReducer = usersSlice.reducer;
const postsReducer = postsSlice.reducer;
const commentsReducer = commentsSlice.reducer;

export {
  usersReducer,
  usersActions,
  postsActions,
  postsReducer,
  commentsReducer,
  commentsActions,
};
