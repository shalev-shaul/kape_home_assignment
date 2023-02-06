import { httpUrl } from '../utils/consts';
import HttpService from './HttpService';

class ActionsService {
  createAction(action_name) {
    HttpService.post(
      httpUrl + '/actions',
      {
        action_name,
      },
      true
    )
      .then(({ data }) => {
        if (data === true) {
          console.log(`Action added ${action_name}`);
        } else {
          console.log(`Action error ${action_name}`);
        }
      })
      .catch((err) => {
        console.log(`Action error ${action_name}`);
      });
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ActionsService();
