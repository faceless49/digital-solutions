import { slice as usersSlice, asyncActions as usersAsyncActions } from './users';

const usersActions = {
  ...usersAsyncActions,
};

const usersReducer = usersSlice.reducer;

export { usersReducer, usersActions };
