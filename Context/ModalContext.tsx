import React, { createContext, useReducer } from 'react';
import { Children } from 'types/children';
import { ModalContext as ModalContextType } from 'types/modalContext';

export const useModalContext = createContext<ModalContextType>(
  {} as ModalContextType
);

//Action types for Reducer
export type Action =
  | { type: 'OPEN_BILL_TO_MODAL' }
  | { type: 'CLOSE_BILL_TO_MODAL' }
  | { type: 'OPEN_BUSINESS_INFO_MODAL' }
  | { type: 'CLOSE_BUSINESS_INFO_MODAL' }
  | { type: 'OPEN_BANK_INFO_MODAL' }
  | { type: 'CLOSE_BANK_INFO_MODAL' };

type State = {
  openBillToModal: boolean;
  openBusinessInfoModal: boolean;
  openBankInfoModal: boolean;
};

export const initialState: State = {
  openBillToModal: false,
  openBusinessInfoModal: false,
  openBankInfoModal: false,
};

export const modalReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'OPEN_BILL_TO_MODAL':
      //change only one state based on case, others should not be changed (...state)
      return {
        ...state,
        openBillToModal: true,
      };
    case 'CLOSE_BILL_TO_MODAL':
      return {
        ...state,
        openBillToModal: false,
      };
    case 'OPEN_BUSINESS_INFO_MODAL':
      return {
        ...state,
        openBusinessInfoModal: true,
      };
    case 'CLOSE_BUSINESS_INFO_MODAL':
      return {
        ...state,
        openBusinessInfoModal: false,
      };
    case 'OPEN_BANK_INFO_MODAL':
      return {
        ...state,
        openBankInfoModal: true,
      };
    case 'CLOSE_BANK_INFO_MODAL':
      return {
        ...state,
        openBankInfoModal: false,
      };
  }
};

const ModalContext = ({ children }: Children) => {
  const [state, dispatch] = useReducer(modalReducer, initialState);

  const handleBillToOpen = () => dispatch({ type: 'OPEN_BILL_TO_MODAL' });
  const handleBillToClose = () => dispatch({ type: 'CLOSE_BILL_TO_MODAL' });
  const handleBusinessInfoOpen = () =>
    dispatch({ type: 'OPEN_BUSINESS_INFO_MODAL' });
  const handleBusinessInfoClose = () =>
    dispatch({ type: 'CLOSE_BUSINESS_INFO_MODAL' });
  const handleBankInfoOpen = () => dispatch({ type: 'OPEN_BANK_INFO_MODAL' });
  const handleBankInfoClose = () => dispatch({ type: 'CLOSE_BANK_INFO_MODAL' });

  return (
    <useModalContext.Provider
      value={{
        openBillToModal: state.openBillToModal,
        openBusinessInfoModal: state.openBusinessInfoModal,
        openBankInfoModal: state.openBankInfoModal,
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
