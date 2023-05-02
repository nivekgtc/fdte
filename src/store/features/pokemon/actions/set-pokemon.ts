import { createAction } from '@reduxjs/toolkit';
import { Pokemon } from '~/models';
import { ActionMap, ReducerMap } from '~/store/types/action-reducer-map';
import { POKEMON_SLICE_ACTIONS, PokemonSliceState } from '../types';

export const setPokemon: ActionMap<Pokemon> = createAction(
	POKEMON_SLICE_ACTIONS.SET_POKEMON
);

export const setPokemonReducer: ReducerMap<PokemonSliceState, Pokemon> = (
	state,
	action
) => {
	state.pokemon = action.payload;

	return state;
};
