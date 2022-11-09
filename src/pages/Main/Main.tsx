import { Button, ButtonGroup, Stack } from '@chakra-ui/react';
import { useConfirmationAction } from '../../context';

export const Main = () => {
	const { waitForAnswer } = useConfirmationAction();

	const onButtonClick = async () => {
		console.log(await waitForAnswer({ title: 'test', subTitle: 'Test sub' }));
	};

	return (
		<Stack w={'100%'} h={'100vh'} alignContent={'center'} justifyContent={'center'}>
			<ButtonGroup justifyContent={'center'}>
				<Button onClick={onButtonClick}>Trigger confirmation</Button>
			</ButtonGroup>
		</Stack>
	);
};
