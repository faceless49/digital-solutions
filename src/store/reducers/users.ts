import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { mainAPI } from 'api';
import { UserType } from 'types';

const fetchUsers = createAsyncThunk<{ users: UserType[] }, undefined>(
  'users/fetchUsers',
  async () => {
    const res = await mainAPI.fetchUsers();
    return { users: res.data };
  },
);

export const slice = createSlice({
  name: 'users',
  initialState: [] as UserType[],
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUsers.fulfilled, (state, action) =>
      action.payload.users.map(user => ({
        ...user,
      })),
    );
  },
});

export const asyncActions = {
  fetchUsers,
};
