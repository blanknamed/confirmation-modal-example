import * as React from 'react';
import { ConfirmationModal } from './components';
import {
	ConfirmationActionContextProviderProps,
	ConfirmationModalData,
	ModalActions,
	ConfirmationActionContextState,
} from './types';

export const ConfirmationActionContext = React.createContext<ConfirmationActionContextState | undefined>(undefined);

export const ConfirmationActionContextProvider = ({ children }: ConfirmationActionContextProviderProps): JSX.Element => {
	const initialModalData: ConfirmationModalData = { title: '', subTitle: undefined };

	const [modalActions, setModalActions] = React.useState<ModalActions | undefined>(undefined);
	const [modalOpen, setModalOpen] = React.useState(false);
	const [modalData, setModalData] = React.useState<ConfirmationModalData>(initialModalData);

	const resetModal = () => {
		setModalOpen(false);

		setModalData(initialModalData);

		setModalActions(undefined);
	};

	return (
		<ConfirmationActionContext.Provider
			value={{
				modalActions,
				setModalActions,
				modalOpen,
				setModalOpen,
				modalData,
				setModalData,
				resetModal,
			}}>
			{children}
			<ConfirmationModal/>
		</ConfirmationActionContext.Provider>
	);
};
