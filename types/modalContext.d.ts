export type ModalContext = {
  openBankInfoModal: boolean;
  openBillToModal: boolean;
  openBusinessInfoModal: boolean;
  handleBillToOpen: () => void;
  handleBillToClose: () => void;
  handleBusinessInfoOpen: () => void;
  handleBusinessInfoClose: () => void;
  handleBankInfoOpen: () => void;
  handleBankInfoClose: () => void;
};
