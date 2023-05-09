import { signIn } from 'next-auth/react';

const useLoginHooks = () => {
  const handleGoggle = () => {
    signIn('google', {
      callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/home`,
    });
  };
  return {
    action: {
      handleGoggle,
    },
    state: {},
  };
};

export default useLoginHooks;
