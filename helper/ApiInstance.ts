import axios from 'axios';

import { Api } from '../types/api';

const ApiInstance = async (api: Api) => {
  let res: any;
  const Url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/${api.url}`;
  try {
    switch (api.method) {
      case 'get':
        res = await axios.get(Url, api?.option);
        break;
      case 'post':
        res = await axios.post(Url, api?.data, api?.option);
        break;
      case 'delete':
        res = await axios.delete(Url, api?.data);
        break;
      default:
    }
    return res;
  } catch (error) {
    return error;
  }
};
export default ApiInstance;
