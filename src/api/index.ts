import { LIMIT_POSTS, LIMIT_USERS } from 'constants';

import { instance } from 'api/apiConfig';
import { CommentType, UserType } from 'types';

export const mainAPI = {
  fetchUsers() {
    return instance.get<UserType[]>(`users/?_limit=${LIMIT_USERS}`);
  },
  fetchPosts(userId: number, limitPosts: number = LIMIT_POSTS) {
    return instance.get(`posts?userId=${userId}&_limit=${limitPosts}`);
  },
  fetchComments(postId: number) {
    return instance.get(`posts/${postId}/comments`);
  },
  createComment(data: CommentType) {
    return instance.post(`posts/${data.postId}/comments`, { data });
  },
};
