import { useEffect } from 'react';

import { useSelector } from 'react-redux';

import styles from './Home.module.scss';

import { UserBlock } from 'components';
import { usersActions } from 'store/reducers';
import { selectUsers } from 'store/selectors';
import { ReturnComponentType } from 'types';
import { useActions } from 'utils/redux-utils';

export const Home = (): ReturnComponentType => {
  const users = useSelector(selectUsers);
  const { fetchUsers } = useActions(usersActions);

  useEffect(() => {
    if (!users.length) {
      fetchUsers();
    }
  }, []);

  return (
    <div className={styles.inner}>
      {users.map(({ name, id, address }) => (
        <UserBlock key={id} name={name} address={address} id={id} />
      ))}
    </div>
  );
};
