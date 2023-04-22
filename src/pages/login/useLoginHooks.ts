import { useState } from 'react';
import { signIn } from 'next-auth/react';

export const useLoginHooks = () => {
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
