import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { usersAPI } from 'api';
import { UsersType } from 'types';

const fetchUsers = createAsyncThunk<{ users: UsersType[] }, undefined>(
  'users/fetchUsers',
  async () => {
    const res = await usersAPI.fetchUsers();
    return { users: res.data };
  },
);

export const slice = createSlice({
  name: 'users',
  initialState: [] as UsersType[],
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
