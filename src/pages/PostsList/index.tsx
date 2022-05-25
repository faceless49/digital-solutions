import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import styles from './PostsList.module.scss';

import { PostBlock } from 'components/PostBlock';
import { postsActions } from 'store/reducers';
import { selectPostsById } from 'store/selectors';
import { ReturnComponentType } from 'types';
import { useActions } from 'utils/redux-utils';

export const PostsList = (): ReturnComponentType => {
  const { userId } = useParams();

  const posts = useSelector(selectPostsById(userId!));
  const { fetchPosts } = useActions(postsActions);

  useEffect(() => {
    if (!posts.length) {
      fetchPosts({ userId: +userId!, limitPosts: 20 });
    }
  }, []);

  return (
    <ul className={styles.postslist}>
      {posts.map(({ id, title, body }) => (
        <li key={id}>
          <Link to={`${id}`}>
            <PostBlock title={title} body={body} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
