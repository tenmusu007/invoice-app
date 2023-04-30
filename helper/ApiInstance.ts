import axios from 'axios';
import { Api } from '../types/api';

export const ApiInstance = async (api: Api) => {
  let res: any = undefined;
  const Url = process.env.NEXT_PUBLIC_BASE_URL + `/api/${api.url}`;
  try {
    switch (api.method) {
      case 'get':
        res = await axios.get(Url,api?.option);
        break;
      case 'post':
        res = await axios.post(Url, api?.data, api?.option);
        break;
      case 'delete':
        res = await axios.delete(Url, api?.data);
        break;
    }
    return res;
  } catch (error) {
    return error;
  }
};
