import { useState } from 'react';

import  ApiInstance  from 'helper/ApiInstance';

const useHomeHooks = (props: any) => {
  const { data } = props;
  const [userInfo, setUserInfo] = useState<any>();
  const UserCheck = async () => {
    const res = await ApiInstance({
      method: 'post',
      url: 'user/create',
      data,
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

export default useHomeHooks;
