import axios from 'axios';
import { Api } from '../types/api';

export const ApiInstance = async (api: Api) => {
  let res: any = undefined;
  let Url: string = '';
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    Url = process.env.NEXT_PUBLIC_BASE_URL + `/api/${api.url}`;
  } else {
    Url = `http://localhost:3000/api/${api.url}`
  }

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
    return error
  }
};
