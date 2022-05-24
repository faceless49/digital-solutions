import React, { FC } from 'react';

import styles from './UserBlock.module.scss';

import { ReturnComponentType } from 'types';

type UserBlockType = {
  name: string;
  surname: string;
  city: string;
};

export const UserBlock: FC<UserBlockType> = ({
  name,
  surname,
  city,
}): ReturnComponentType => (
  <div className={styles.user}>
    <h3>
      {name}
      {surname}
    </h3>
    <span>{city}</span>
    <button type="button">Смотреть профиль</button>
  </div>
);
