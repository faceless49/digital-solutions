import React, { FC } from 'react';

import { Link } from 'react-router-dom';

import styles from './UserBlock.module.scss';

import { ReturnComponentType } from 'types';

type UserBlockType = {
  id: number;
  name: string;
  address: {
    city: string;
  };
};

export const UserBlock: FC<UserBlockType> = ({
  id,
  name,
  address,
}): ReturnComponentType => (
  <div className={styles.user}>
    <h3 className={styles.name}>{name}</h3>
    <span className={styles.address}>{address.city}</span>
    <Link className={styles.link} to={`/user/${id}`}>
      Смотреть профиль
    </Link>
  </div>
);
