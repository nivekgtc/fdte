import { createAction } from '@reduxjs/toolkit';
import { NamedAPIResource } from '~/models';
import { ActionMap, ReducerMap } from '~/store/types/action-reducer-map';
import { POKEMON_SLICE_ACTIONS, PokemonSliceState } from '../types';

export const setTypes: ActionMap<NamedAPIResource[]> = createAction(
	POKEMON_SLICE_ACTIONS.SET_TYPES
);

export const setTypesReducer: ReducerMap<
	PokemonSliceState,
	NamedAPIResource[]
> = (state, action) => {
	state.types = action.payload;
	return state;
};
