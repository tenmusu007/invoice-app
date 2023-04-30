import { ApiInstance } from 'helper/ApiInstance';
import { useState } from 'react';
import { UserInfo } from 'types/user';
import { UserInfoData } from 'types/user';
// type Pros = {
//   data: Session | null;
// };mm
export const useHomeHooks = (props: any) => {
  const { data } = props;
  const [userInfo, setUserInfo] = useState<any>();
  const UserCheck = async () => {
    const res = await ApiInstance({
      method: 'post',
      url: 'user/create',
      data: data,
    });
    console.log(res);
    
    setUserInfo(res.data);
  };
  return {
    action: {
      UserCheck,
    },
    state: { userInfo },
  };
};
