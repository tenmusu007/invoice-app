import { getToken } from 'next-auth/jwt';
import type { NextApiRequest, NextApiResponse } from 'next';


export default async function test(req: NextApiRequest,res: NextApiResponse) {
  // If you don't have NEXTAUTH_SECRET set, you will have to pass your secret as `secret` to `getToken`

  const token = await getToken({ req });
  console.log(token);
  
//   if (token) {
//     // Signed in
//     console.log('JSON Web Token', JSON.stringify(token, null, 2));
//   } else {
//     // Not Signed in
//     res.status(401);
//   }
//   res.end();
};
