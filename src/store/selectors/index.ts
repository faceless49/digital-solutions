import { CommentType, PostType, UserType } from 'types';
import { AppRootStateType } from 'utils/types';

export const selectUsers = (state: AppRootStateType): UserType[] => state.users;
export const selectUserById =
  (id: string) =>
  (state: AppRootStateType): UserType =>
    // @ts-ignore
    state.users.find(user => user.id === +id);

export const selectPostsById =
  (id: string) =>
  (state: AppRootStateType): PostType[] =>
    state.posts.filter(post => post.userId === +id);

export const selectPostById =
  (id: string) =>
  (state: AppRootStateType): PostType =>
    // @ts-ignore
    state.posts.find(post => post.id === +id);

export const selectCommentsById =
  (id: string) =>
  (state: AppRootStateType): CommentType[] =>
    state.comments.filter(comment => comment.postId === +id);
