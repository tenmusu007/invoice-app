import { Children } from './children';
import {BusinessInfo} from './template'
export type Modal = {
  contents?: Children | string | element;
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};
