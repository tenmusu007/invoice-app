import { Children } from './children';

export type Modal = {
  children?: Children | string | element;
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};
