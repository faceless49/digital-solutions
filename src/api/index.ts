import { instance, LIMIT_USERS } from 'api/apiConfig';
import { UserType } from 'types';

export const mainAPI = {
  fetchUsers() {
    return instance.get<UserType[]>(`users/?_limit=${LIMIT_USERS}`);
  },
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  fetchPosts(userId: number, limitPosts: number = 3) {
    return instance.get(`posts?userId=${userId}&_limit=${limitPosts}`);
  },
  fetchComments(postId: number) {
    return instance.get(`posts/${postId}/comments`);
  },
  createComment(name: string, email: string, body: string) {
    return instance.post(`comments`, { name, email, body });
  },
};
