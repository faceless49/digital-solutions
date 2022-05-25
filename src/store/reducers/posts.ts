import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { mainAPI } from 'api';
import { PostType } from 'types';

const fetchPosts = createAsyncThunk<
  { posts: PostType[]; userId: number; limitPosts: number },
  { userId: number; limitPosts: number }
>('posts/fetchPosts', async param => {
  const res = await mainAPI.fetchPosts(param.userId, param.limitPosts);
  return { posts: res.data, userId: param.userId, limitPosts: param.limitPosts };
});

export const slice = createSlice({
  name: 'posts',
  initialState: [] as PostType[],
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPosts.fulfilled, (state, action) =>
      action.payload.posts.map(post => ({
        ...post,
      })),
    );
  },
});

export const asyncActions = {
  fetchPosts,
};
