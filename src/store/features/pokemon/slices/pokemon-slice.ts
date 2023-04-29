import { SliceCaseReducers } from '@reduxjs/toolkit';
import { createHydratedSlice } from '~/store/helpers';
import { setPokemonAbilityReducer, setPokemonReducer } from '../actions';
import {
	POKEMON_SLICE_INITIAL_STATE,
	PokemonSliceState,
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
	},
});
