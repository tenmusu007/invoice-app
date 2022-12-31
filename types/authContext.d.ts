
export type Auth = {
	currentInfo: Array;
	setCurrentInfo: (data: UserInfo) => void;
};
export type UserInfo = {
	displayName: string | null;
	email: string | null;
	phoneNumber: string | null;
	photoURL: string | null;
	providerId: string | null;
	uid: string | null;
};