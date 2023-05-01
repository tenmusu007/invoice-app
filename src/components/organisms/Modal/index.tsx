import { Modal as MUIModal } from '@mui/material';
import Box from '@mui/material/Box';

import { Modal as ModalType } from 'types/modal';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgColor: '#FFF5F5 !important',
  border: '1px solid #000',
} as const;

// Background color needs to be changed but even if I changed the style, it never updated
const Modal = (props: ModalType) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { openModal, setOpenModal, contents } = props;
  return (
    <MUIModal open={openModal} onClose={setOpenModal}>
      <Box sx={style}>{contents}</Box>
    </MUIModal>
  );
};

export default Modal;
