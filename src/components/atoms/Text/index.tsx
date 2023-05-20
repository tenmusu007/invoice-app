import { Typography } from '@mui/material';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Box } from '@mui/system';

import type { TypographyType } from 'types/text';

const Text = (props: Partial<TypographyType>) => {
  const { label, labelText, variant, text, style, children } = props;
  return (
    <>
      <Box sx={style}>
        {children ? (
          <>
            <Typography variant={label}>{labelText}</Typography>
            {children}
          </>
        ) : (
          <>
            {label ? (
              <>
                <Typography variant={label}>{labelText}</Typography>
                <Typography variant={variant}>{text}</Typography>
              </>
            ) : (
              <Typography variant={variant} sx={style}>
                {text}
              </Typography>
            )}
          </>
        )}
      </Box>
    </>
  );
};

export default Text;
