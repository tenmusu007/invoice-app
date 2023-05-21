import { TypographyTypeMap } from '@mui/material/Typography';
import type { ReactNode } from 'react';

export type TypographyType = {
  label: TypographyTypeMap['props']['variant'];
  labelText: string;
  variant: TypographyTypeMap['props']['variant'];
  text: string | null;
  style: any;
  children: ReactNode;
};
