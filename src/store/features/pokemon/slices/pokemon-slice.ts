import { SliceCaseReducers } from '@reduxjs/toolkit';
import { createHydratedSlice } from '~/store/helpers';
import {
	setModalReducer,
	setPokemonAbilityReducer,
	setPokemonReducer,
} from '../actions';
import { setCaptureReducer } from '../actions/capture';
import { setRemoveReducer } from '../actions/remove';
import {
	CAPTURE,
	POKEMON_SLICE_INITIAL_STATE,
	PokemonSliceState,
	REMOVE,
	SET_MODAL,
	SET_POKEMON,
	SET_POKEMON_ABILITY,
	pokemonSliceName,
} from '../types';

export const pokemonSlice = createHydratedSlice<
	PokemonSliceState,
	SliceCaseReducers<PokemonSliceState>,
	typeof pokemonSliceName
>({
	name: pokemonSliceName,
	initialState: { ...POKEMON_SLICE_INITIAL_STATE },
	reducers: {
		[SET_POKEMON_ABILITY]: setPokemonAbilityReducer,
		[SET_POKEMON]: setPokemonReducer,
		[SET_MODAL]: setModalReducer,
		[CAPTURE]: setCaptureReducer,
		[REMOVE]: setRemoveReducer,
	},
});
