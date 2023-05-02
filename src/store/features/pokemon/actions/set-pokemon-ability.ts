import { createAction } from '@reduxjs/toolkit';
import { NamedAPIResource } from '~/models';
import { ActionMap, ReducerMap } from '~/store/types/action-reducer-map';
import { POKEMON_SLICE_ACTIONS, PokemonSliceState } from '../types';

export const setAbilities: ActionMap<NamedAPIResource[]> = createAction(
	POKEMON_SLICE_ACTIONS.SET_ABILITIES
);

export const setPokemonAbilityReducer: ReducerMap<
	PokemonSliceState,
	NamedAPIResource[]
> = (state, action) => {
	state.abilities = action.payload;
	return state;
};
