import { Children } from './children';

export type Button = {
  children?: Children;
  text: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | Dispatch<SetStateAction<boolean>>;
  sx?: SxProps<Theme> | undefined;
  variant?: 'text' | 'outlined' | 'contained' | undefined;
  type?: 'submit' | undefined;
  icon?: React.ReactNode;
};
