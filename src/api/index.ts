import { instance } from 'api/apiConfig';
import { UsersType } from 'types';

export const usersAPI = {
  fetchUsers() {
    return instance.get<UsersType[]>('users');
  },
};
