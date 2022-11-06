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
	const { modalOpen, modalData, resetModal, modalActions } = useConfirmationActionContext();

	const onModalClose = async () => {
		await modalActions!.denyAction();

		resetModal();
	};

	const onAcceptClick = async () => {
		await modalActions!.acceptAction();

		resetModal();
	};

	return (
		<Modal isCentered isOpen={modalOpen} onClose={onModalClose}>
			<ModalOverlay></ModalOverlay>
			<ModalContent>
				<ModalHeader>
					{modalData.title}
				</ModalHeader>
				<ModalCloseButton/>
				<ModalBody>
					{modalData.subTitle && <Text>{modalData.subTitle}</Text>}
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
