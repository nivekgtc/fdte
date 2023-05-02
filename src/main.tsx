import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { container } from './ioc/inversify.config.ts';
import Routes from './main/routes.tsx';
import ContainerProvider from './presentation/providers/container-provider.tsx';
import GlobalStyles from './presentation/styles/global-styles.ts';
import { theme } from './presentation/styles/theme.ts';
import store from './store/store.ts';

import './i18n';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<ContainerProvider container={container}>
				<ThemeProvider theme={theme}>
					<GlobalStyles />
					<Routes />
				</ThemeProvider>
			</ContainerProvider>
		</Provider>
	</React.StrictMode>
);
