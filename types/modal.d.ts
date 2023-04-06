import { Children } from './children';
import {BusinessInfo} from './template'
export type Modal = {
  children?: Children | string | element;
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  template?: any;
};
