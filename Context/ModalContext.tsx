import React, { createContext, useState } from 'react';
import { Children } from 'types/children';
import { ModalContext as ModalContextType } from 'types/modalContext';

export const useModalContext = createContext<ModalContextType>(
  {} as ModalContextType
);

const ModalContext = ({ children }: Children) => {
  const [openBillToModal, setOpenBillToModal] = useState<boolean>(false);
  const [openBusinessInfoModal, setOpenBusinessInfoModal] =
    useState<boolean>(false);
  const [openBankInfoModal, setOpenBankInfoModal] = useState<boolean>(false);

  const handleBillToOpen = () => setOpenBillToModal(true);
  const handleBillToClose = () => setOpenBillToModal(false);
  const handleBusinessInfoOpen = () => setOpenBusinessInfoModal(true);
  const handleBusinessInfoClose = () => setOpenBusinessInfoModal(false);
  const handleBankInfoOpen = () => setOpenBankInfoModal(true);
  const handleBankInfoClose = () => setOpenBankInfoModal(false);

  return (
    <useModalContext.Provider
      value={{
        openBillToModal,
        openBusinessInfoModal,
        openBankInfoModal,
        handleBillToOpen,
        handleBillToClose,
        handleBusinessInfoOpen,
        handleBusinessInfoClose,
        handleBankInfoOpen,
        handleBankInfoClose,
      }}
    >
      {children}
    </useModalContext.Provider>
  );
};

export default ModalContext;
