import { createAction } from '@reduxjs/toolkit';
import { Pokemon } from '~/models';
import { ActionMap, ReducerMap } from '~/store/types/action-reducer-map';
import { POKEMON_SLICE_ACTIONS, PokemonSliceState } from '../types';

export const edit: ActionMap<Pokemon> = createAction(
	POKEMON_SLICE_ACTIONS.EDIT
);

export const setEditReducer: ReducerMap<PokemonSliceState, Pokemon> = (
	state,
	action
) => {
	const indexToChange = state.pokemons.findIndex(
		(item) => item.id === action.payload.id
	);

	const NUMBERS_TO_CHANGE = 1;

	state.pokemons.splice(indexToChange, NUMBERS_TO_CHANGE, action.payload);

	return state;
};
