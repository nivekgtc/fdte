import { SliceCaseReducers } from '@reduxjs/toolkit';
import { createHydratedSlice } from '~/store/helpers';
import {
	setModalReducer,
	setPokemonAbilityReducer,
	setPokemonReducer,
	setTypesReducer,
} from '../actions';
import { setCaptureReducer } from '../actions/capture';
import { setEditReducer } from '../actions/edit';
import { setRemoveReducer } from '../actions/remove';
import {
	CAPTURE,
	EDIT,
	POKEMON_SLICE_INITIAL_STATE,
	PokemonSliceState,
	REMOVE,
	SET_ABILITIES,
	SET_MODAL,
	SET_POKEMON,
	SET_TYPES,
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
		[SET_ABILITIES]: setPokemonAbilityReducer,
		[SET_POKEMON]: setPokemonReducer,
		[SET_MODAL]: setModalReducer,
		[CAPTURE]: setCaptureReducer,
		[REMOVE]: setRemoveReducer,
		[EDIT]: setEditReducer,
		[SET_TYPES]: setTypesReducer,
	},
});
