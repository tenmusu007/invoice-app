import { Typography } from '@mui/material';
import React from 'react';

import type { Title as TitleType } from 'types/title';

const PageTitle = ({ content, variant, component }: TitleType) => (
    <Typography variant={variant} component={component}>
      {content}
    </Typography>
  );

export default PageTitle;
