import * as React from 'react';

export interface ConfirmationModalData {
  title: string,
  subTitle?: string
}

export type ReactSetStateAction<T> = React.Dispatch<React.SetStateAction<T>>
export type ModalActions = { acceptAction: () => void, denyAction: () => void }

export interface ConfirmationActionContextProviderProps {
  children: React.ReactNode
}

export interface ConfirmationActionContextState {
  modalOpen: boolean,
  modalData: ConfirmationModalData,
  setModalOpen: ReactSetStateAction<boolean>
  setModalData: ReactSetStateAction<ConfirmationModalData>
  resetModal: () => void
  modalActions?: ModalActions
  setModalActions: (actions: ModalActions) => void
}
