import { Box } from '@mui/material';
import { Children } from '../../../../types/children';
const BoxLayout = ({ children }: Children) => {
  return (
    <Box
      display={'grid'}
      justifyContent={'center'}
      alignItems={'center'}
      sx={{ height: '100vh', backgroundColor: '#B8C1EC' }}
      paddingTop={5}
    >
      {children}
    </Box>
  );
};

export default BoxLayout;
