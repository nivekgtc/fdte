import { createAction } from '@reduxjs/toolkit';
import { Pokemon } from '~/domain/models';
import { ActionMap, ReducerMap } from '~/store/types/action-reducer-map';
import {
	NOT_POKEMON_NAME,
	POKEMON_SLICE_ACTIONS,
	PokemonSliceState,
} from '../types';

export const remove: ActionMap<number> = createAction(
	POKEMON_SLICE_ACTIONS.REMOVE
);

export const setRemoveReducer: ReducerMap<PokemonSliceState, number> = (
	state,
	action
) => {
	const indexToRemove = state.pokemons.findIndex(
		(item) => item.id === Number(action.payload)
	);
	const NUMBERS_TO_REMOVE = 1;

	state.pokemons.splice(indexToRemove, NUMBERS_TO_REMOVE, {
		name: NOT_POKEMON_NAME,
	} as Pokemon);

	state.modal.isOpen = false;
	return state;
};
