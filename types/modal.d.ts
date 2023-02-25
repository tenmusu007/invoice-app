import { Children } from './children';

export type Modal = {
    children?: Children;
    openModal: boolean
    setOpenModal: Dispatch<SetStateAction<boolean>>
}