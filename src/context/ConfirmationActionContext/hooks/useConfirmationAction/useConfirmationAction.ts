import { useConfirmationActionContext } from '../useConfirmationActionContext';
import { WaitForAnswerArgs } from '../../types';

export const useConfirmationAction = () => {
	const { setModalData, setResolve } = useConfirmationActionContext();

	const waitForAnswer = ({ title, subTitle }: WaitForAnswerArgs) =>
		new Promise<boolean>(resolve => {
			setModalData({ title, subTitle, open: true });

			setResolve(resolve);
		});

	return { waitForAnswer };
};
