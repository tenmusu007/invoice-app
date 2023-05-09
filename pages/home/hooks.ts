import { useState } from 'react';

import { ApiInstance } from 'helper/ApiInstance';

const useHomeHook = (props: any) => {
  const [userInfo, setUserInfo] = useState<any>();
  const UserCheck = async () => {
    const res = await ApiInstance({
      method: 'post',
      url: 'user/create',
      data: props,
    });
    setUserInfo(res.data);
  };
  return {
    action: {
      UserCheck,
    },
    state: { userInfo },
  };
};

export default useHomeHook;
