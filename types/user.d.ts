export type UserInfo = {
  name: string | null | undefined;
  email: string | null | undefined;
  image: string | null | undefined;
};
export type UserInfoData = {
  data: UserInfo | undefined;
};

export type User = UserInfo & {
  _id: string;
  __v: number;
};
