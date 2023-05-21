import type { ReactNode } from 'react';

export type LinkType = {
  children: ReactNode;
  path: string | object;
  text?: string;
};
