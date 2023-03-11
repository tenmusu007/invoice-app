import { ApiInstance } from 'helper/ApiInstance';
import { useState } from 'react';
import { UserInfo } from 'types/user';
import { UserInfoData } from 'types/user';
type Pros = {
  data: UserInfo | undefined;
};
export const useHomeHook = (props: Pros) => {
  console.log(props);
  const {data} = props
  const [userInfo, setUserInfo] = useState<any>();
  const UserCheck = async () => {
    const res = await ApiInstance({
      method: 'post',
      url: 'user/create',
      data: data,
    });
    setUserInfo(res);
  };
  return {
    action: {
      UserCheck,
    },
    state: { userInfo },
  };
};
