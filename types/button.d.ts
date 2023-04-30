import { Children } from './children';

export type Button = {
  children?: Children;
  text: string;
  onClick?: (
  ) => void | Dispatch<SetStateAction<boolean>>;
  sx?: SxProps<Theme> | undefined;
  variant?: 'text' | 'outlined' | 'contained' | undefined;
  type?: 'submit' | undefined | 'button';
  icon?: React.ReactNode;
};
