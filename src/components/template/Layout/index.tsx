import BoxLayout from 'src/components/atoms/Box';
import { Container } from '@mui/material';
import { Children } from '../../../../types/children';
import Header from '../Header';
const Layout = ({ children }: Children) => {
  return (
    <>
      <Header />
      <Container component="main" fixed>
        <BoxLayout>{children}</BoxLayout>
      </Container>
    </>
  );
};

export default Layout;
