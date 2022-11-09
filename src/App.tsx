import { ChakraProvider } from '@chakra-ui/react';
import { ConfirmationActionContextProvider } from './context';
import { Main } from './pages/Main';

export function App() {
	return (
		<ChakraProvider >
			<ConfirmationActionContextProvider>
				<Main/>
			</ConfirmationActionContextProvider>
		</ChakraProvider>
	);
}
