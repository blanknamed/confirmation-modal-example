import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Text,
	Button,
	ButtonGroup,
} from '@chakra-ui/react';
import { useConfirmationActionContext } from '../../hooks/useConfirmationActionContext';

export const ConfirmationModal = () => {
	const {
		modalData: {
			title,
			subTitle,
			open,
		},
		resetModal,
		resolvePromise,
	} = useConfirmationActionContext();

	const onModalClose = async () => {
    resolvePromise!(true);

    resetModal();
	};

	const onAcceptClick = async () => {
    resolvePromise!(false);

    resetModal();
	};

	return (
		<Modal isCentered isOpen={open} onClose={onModalClose}>
			<ModalOverlay></ModalOverlay>
			<ModalContent>
				<ModalHeader>
					{title}
				</ModalHeader>
				<ModalCloseButton/>
				<ModalBody>
					{subTitle && <Text>{subTitle}</Text>}
					<Text>Are you sure you want to confirm the action?</Text>
				</ModalBody>
				<ModalFooter>
					<ButtonGroup>
						<Button onClick={onAcceptClick}>Ok</Button>
						<Button onClick={onModalClose}>Cancel</Button>
					</ButtonGroup>
				</ModalFooter>
			</ModalContent>
		</Modal>

	);
};
