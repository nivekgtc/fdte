import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Routes from 'routes.tsx';
import { ThemeProvider } from 'styled-components';
import store from './store/store.ts';
import GlobalStyles from './styles/global-styles.ts';
import { theme } from './styles/theme.ts';

import './i18n';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			{/* <ContainerProvider container={container}> */}
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Routes />
			</ThemeProvider>
			{/* </ContainerProvider> */}
		</Provider>
	</React.StrictMode>
);
