import React, { FC } from 'react';

import styles from './PostBlock.module.scss';

import { PostType, ReturnComponentType } from 'types';

export const PostBlock: FC<Partial<PostType>> = ({
  title,
  body,
}): ReturnComponentType => (
  <div className={styles.post}>
    <h3 className={styles.subtitle}>{title}</h3>
    <p className={styles.inner}>{body}</p>
  </div>
);
