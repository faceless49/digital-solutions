export type { Nullable } from './Nullable';
export type { ReturnComponentType } from './ReturnComponentType';

export type UserType = {
  id: number;
  name: string;
  address: {
    city: string;
  };
  email: string;
  website: string;
  phone: string;
  posts: PostType[];
};

export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
export type CommentType = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
