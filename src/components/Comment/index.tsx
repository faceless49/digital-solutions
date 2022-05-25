import { FC } from 'react';

import styles from './Comment.module.scss';

import { CommentType, ReturnComponentType } from 'types';

export const Comment: FC<CommentType> = ({
  name,
  body,
  postId,
  email,
}): ReturnComponentType => (
  <div className={styles.comment}>
    <h3>
      {postId}.{name}
    </h3>
    <h3>{email}</h3>
    <p>{body}</p>
  </div>
);
