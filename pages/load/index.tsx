import Text from '@components/atoms/Text';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Load = () => {
  const { data: session, status } = useSession();
  const [user, setUser] = useState<any>();
  const router = useRouter();

  useEffect(() => {
    const loginPath = () => {
      if (status === 'authenticated') {
        // fetch();
        return router.push('/home');
      } else {
        console.log(status);
        return router.push('/login');
      }
    };
    loginPath();
  }, []);
  return <Text variant="h2" text="sushi" />;
};

export default Load;
