import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { mainAPI } from 'api';
import { CommentType } from 'types';

const fetchComments = createAsyncThunk<
  { comments: CommentType[]; postId: number },
  { postId: number }
>('comments/fetchComments', async param => {
  const res = await mainAPI.fetchComments(param.postId);
  return { comments: res.data, postId: param.postId };
});

const addComment = createAsyncThunk<
  { comment: CommentType },
  { name: string; email: string; body: string }
>('comments/addComment', async param => {
  const res = await mainAPI.createComment(param.name, param.email, param.body);
  return { comment: res.data.data };
});

export const slice = createSlice({
  name: 'comments',
  initialState: [] as CommentType[],
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchComments.fulfilled, (state, action) =>
        action.payload.comments.map(comment => ({
          ...comment,
        })),
      )
      .addCase(addComment.fulfilled, (state, action) => {
        state.unshift({ ...action.payload.comment });
      });
  },
});

export const asyncActions = {
  fetchComments,
  addComment,
};
