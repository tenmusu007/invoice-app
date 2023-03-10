import { ApiInstance } from 'helper/ApiInstance';
import { useState } from 'react';

export const useHomeHook = (props: any) => {
  const [userInfo, setUserInfo] = useState<any>()
  const UserCheck = async() => {
    const res = await ApiInstance({
      method: 'post',
      url: 'user/create',
      data:props,
    });
    setUserInfo(res)
  };
  return {
    action: {
      UserCheck,
    },
    state: { userInfo },
  };
};
