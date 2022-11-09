import * as React from 'react';
import { ConfirmationModal } from './components';
import {
	ConfirmationActionContextProviderProps,
	ConfirmationModalData,
	ResolveAction,
	ConfirmationActionContextState,
} from './types';

export const ConfirmationActionContext = React.createContext<ConfirmationActionContextState | undefined>(undefined);

export const ConfirmationActionContextProvider = ({ children }: ConfirmationActionContextProviderProps): JSX.Element => {
	const initialModalData: ConfirmationModalData = { title: '', subTitle: undefined, open: false };

	const modalActions = React.useRef<ResolveAction | undefined>(undefined);
	const [modalData, setModalData] = React.useState<ConfirmationModalData>(initialModalData);

	const resetModal = () => {
		setModalData(initialModalData);

		setResolve(undefined);
	};

	const setResolve = (nextResolve: ResolveAction | undefined) => {
		modalActions.current = nextResolve;
	};

	return (
		<ConfirmationActionContext.Provider
			value={{
				resolvePromise: modalActions.current,
				setResolve,
				modalData,
				setModalData,
				resetModal,
			}}>
			{children}
			<ConfirmationModal/>
		</ConfirmationActionContext.Provider>
	);
};
