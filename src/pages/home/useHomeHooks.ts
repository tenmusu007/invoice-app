import { useSession } from 'next-auth/react';
import { useState } from 'react';

import HomeText from './text.json';

import ApiInstance from 'helper/ApiInstance';
import useLocale from 'helper/useLocale';

import type { User } from 'types/user';

const useHomeHooks = () => {
  const { data } = useSession();

  // const { data } = props;

  const [userInfo, setUserInfo] = useState<User>();
  const UserCheck = async () => {
    const res = await ApiInstance({
      method: 'post',
      url: 'user/create',
      data,
    });

    setUserInfo(res.data);
  };

  const { t } = useLocale(HomeText);
  const handleGetStarted = () => {};
  return {
    action: {
      UserCheck,
      handleGetStarted
    },
    state: { userInfo },
    t,
  };
};

export default useHomeHooks;
