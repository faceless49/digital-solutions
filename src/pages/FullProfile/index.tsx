import React, { FC, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import styles from './FullProfile.module.scss';

import { PostBlock } from 'components';
import { postsActions } from 'store/reducers';
import { selectPostsById, selectUserById } from 'store/selectors';
import { ReturnComponentType } from 'types';
import { useActions } from 'utils/redux-utils';

export const FullProfile: FC = (): ReturnComponentType => {
  const { userId } = useParams();
  const user = useSelector(selectUserById(userId!));
  const posts = useSelector(selectPostsById(userId!));

  const { name, address, email, phone, website } = user;
  const { fetchPosts } = useActions(postsActions);

  useEffect(() => {
    if (!posts.length) {
      fetchPosts({ userId: +userId! });
    }
  }, []);

  return (
    <div className={styles.inner}>
      <header className={styles.header}>
        <h2 className={styles.title}>{name}</h2>
        <div>
          <ul className={styles.list}>
            <li>{address.city}</li>
            <li>{email}</li>
            <li>{phone}</li>
            <li>{website}</li>
            <li>
              <button type="button">Написать сообщение</button>
            </li>
          </ul>
        </div>
      </header>

      <div className={styles.posts}>
        <h2 className={styles.title}>Посты</h2>
        <div className={styles.wrapper}>
          {posts.map(({ id, title, body }) => (
            <PostBlock key={id} title={title} body={body} />
          ))}
        </div>
        <Link to="postslist">Посмотреть все</Link>
      </div>
    </div>
  );
};
