import { httpUrl, jwt_key } from '../utils/consts';
import HttpService from './HttpService';
import LocalStorageService from './LocalStorageService';

class AuthService {
  createJwtToken(name) {
    HttpService.post(httpUrl + '/auth', {
      name: 'Shalev',
    })
      .then(({ data }) => {
        console.log(data);
        LocalStorageService.set(jwt_key, data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AuthService();
