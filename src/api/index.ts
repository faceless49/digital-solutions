import { instance } from 'api/apiConfig';

export const usersAPI = {
  fetchUsers() {
    return instance.get<ResponseType>('');
  },
};
