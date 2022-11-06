import { useConfirmationActionContext } from '../useConfirmationActionContext';
import { ConfirmationModalData } from '../../types';

export const useConfirmationAction = () => {
	const { setModalData, setModalOpen, setModalActions } = useConfirmationActionContext();

	const waitForAnswer = ({ title, subTitle }: ConfirmationModalData) => new Promise<boolean>(resolve => {
		setModalData({ title, subTitle });

		setModalActions({
			acceptAction() {
				resolve(true);
			},
			denyAction() {
				resolve(false);
			},
		});
		setModalOpen(true);
	});

	return { waitForAnswer };
};
