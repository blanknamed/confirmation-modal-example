import * as React from 'react';

export interface ConfirmationModalData {
  title: string,
  subTitle?: string,
  open: boolean
}
export type WaitForAnswerArgs = Omit<ConfirmationModalData, 'open'>

export type ReactSetStateAction<T> = React.Dispatch<React.SetStateAction<T>>
export type ResolveAction = (value: ResolveActionArgument) => void

export interface ConfirmationActionContextProviderProps {
  children: React.ReactNode
}

export type ResolveActionArgument = boolean | PromiseLike<boolean>

export interface ConfirmationActionContextState {
  modalData: ConfirmationModalData,
  setModalData: ReactSetStateAction<ConfirmationModalData>
  resetModal: () => void
  resolvePromise?: (value: boolean) => void
  setResolve: (nextResolve: ResolveAction) => void
}
