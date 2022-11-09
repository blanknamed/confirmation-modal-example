import React from 'react';
import { ConfirmationActionContext } from '../../ConfirmationActionContext';

export const useConfirmationActionContext = () => {
	const context = React.useContext(ConfirmationActionContext);

	if (context === undefined) {
		throw new Error('useConfirmationAction used outside ConfirmationActionProvider');
	}

	return context;
};
