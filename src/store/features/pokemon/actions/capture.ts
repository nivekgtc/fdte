import { createAction } from '@reduxjs/toolkit';
import { Pokemon } from '~/models';
import { ActionMap, ReducerMap } from '~/store/types/action-reducer-map';
import {
	NOT_POKEMON_NAME,
	POKEMON_SLICE_ACTIONS,
	PokemonSliceState,
} from '../types';

export const capture: ActionMap<Pokemon> = createAction(
	POKEMON_SLICE_ACTIONS.CAPTURE
);

export const setCaptureReducer: ReducerMap<PokemonSliceState, Pokemon> = (
	state,
	action
) => {
	const indexToChange = state.pokemons.findIndex(
		(item) => item.name === NOT_POKEMON_NAME
	);

	const NUMBERS_TO_CHANGE = 1;

	state.pokemons.splice(indexToChange, NUMBERS_TO_CHANGE, action.payload);

	state.modal.isOpen = false;

	return state;
};
