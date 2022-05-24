import { useEffect } from 'react';

import { useSelector } from 'react-redux';

import { UserBlock } from 'components/UserBlock';
import { usersActions } from 'store/reducers';
import { ReturnComponentType, UsersType } from 'types';
import { useActions } from 'utils/redux-utils';
import { AppRootStateType } from 'utils/types';

export const Home = (): ReturnComponentType => {
  const users = useSelector<AppRootStateType, UsersType[]>(state => state.users);
  const { fetchUsers } = useActions(usersActions);

  useEffect(() => {
    if (!users.length) {
      fetchUsers();
    }
  }, []);

  return (
    <div>
      {users.map(({ name, id, username, address }) => (
        <UserBlock key={id} name={name} surname={username} address={address} />
      ))}
    </div>
  );
};
