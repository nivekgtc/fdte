import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { pokemonApi } from './api/services/pokemon/pokemon.api';
import { pokemonSlice } from './features/pokemon/slices/pokemon-slice';
import { pokemonSliceName, PokemonSliceState } from './features/pokemon/types';

export type AppDispatch = ReturnType<typeof createStore>['dispatch'];
export type AppState = ReturnType<ReturnType<typeof createStore>['getState']>;

export type StoreProps = {
	pokemonSlice: PokemonSliceState;
	[pokemonApi.reducerPath]: any;
};

const createStore = () =>
	configureStore<StoreProps>({
		reducer: {
			[pokemonSliceName]: pokemonSlice.reducer,
			[pokemonApi.reducerPath]: pokemonApi.reducer,
		},
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(pokemonApi.middleware),
	});

const store = createStore();
setupListeners(store.dispatch);

export default store;
