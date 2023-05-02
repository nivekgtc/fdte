/**
 * @vitest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import { ThemeProvider } from 'styled-components';
import { describe, vitest } from 'vitest';

import { Sidebar } from '~/presentation/components';
import { theme } from '~/presentation/styles/theme';

const mockStore = configureStore();

describe('Sidebar Component', () => {
	let store: MockStoreEnhanced;
	const mockDispatch = vitest.fn();
	const setPokemonMock = vitest.fn();
	const setModalMock = vitest.fn();
	// vitest.mock('~/store/features/pokemon/actions', () => ({
	// 	setPokemon: setPokemonMock,
	// 	setModal: setModalMock,
	// }));

	beforeEach(() => {
		store = mockStore({
			pokemonSlice: {
				pokemons: [
					{
						id: 1,
						name: 'bulbasaur',
						sprites: {
							front_default: 'https://pokeapi.co/api/v2/pokemon/1.png',
						},
					},
					{
						id: 2,
						name: 'charmander',
						sprites: {
							front_default: 'https://pokeapi.co/api/v2/pokemon/4.png',
						},
					},
				],
			},
		});
	});

	it('should render the list of pokemons', () => {
		render(
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<Sidebar />
				</ThemeProvider>
			</Provider>
		);

		const listOfPokemons = screen.getByTestId('sidebar-list');

		expect(listOfPokemons).toBeInTheDocument();
	});
});
