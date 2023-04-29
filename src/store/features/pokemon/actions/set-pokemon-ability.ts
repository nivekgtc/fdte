import { createAction } from '@reduxjs/toolkit';
import { PokemonAbilityModel } from '~/domain/models';
import { ActionMap, ReducerMap } from '~/store/types/action-reducer-map';
import { POKEMON_SLICE_ACTIONS, PokemonSliceState } from '../types';

export const setToken: ActionMap<PokemonAbilityModel> = createAction(
	POKEMON_SLICE_ACTIONS.SET_POKEMON_ABILITY
);

export const setPokemonAbilityReducer: ReducerMap<
	PokemonSliceState,
	PokemonAbilityModel
> = (state, action) => {
	state.ability = action.payload;
	return state;
};
