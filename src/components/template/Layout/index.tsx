import { Container } from '@mui/material';

import { Children } from '../../../../types/children';
import Header from '../Header';

import BoxLayout from 'src/components/atoms/Box';

const Layout = ({ children }: Children) => (
  <>
    <Header />
    <Container component="main" fixed>
      <BoxLayout>{children}</BoxLayout>
    </Container>
  </>
);

export default Layout;
