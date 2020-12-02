import axios from 'axios';

import routes from './routes';

export const create = ({ email, fullName, password }) => {
  return axios.post(routes.usersUrl, {
    user: { email, full_name: fullName, password }
  });
}
