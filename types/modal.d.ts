import { Children } from './children';

export type Modal = {
  contents?: Children | string | element;
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};
