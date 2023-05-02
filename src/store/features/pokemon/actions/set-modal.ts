import { createAction } from '@reduxjs/toolkit';
import { ActionMap, ReducerMap } from '~/store/types/action-reducer-map';
import { ModalTypes, POKEMON_SLICE_ACTIONS, PokemonSliceState } from '../types';

export const setModal: ActionMap<ModalTypes | null> = createAction(
	POKEMON_SLICE_ACTIONS.SET_MODAL
);

export const setModalReducer: ReducerMap<
	PokemonSliceState,
	ModalTypes | null
> = (state, action) => {
	if (!action.payload) {
		state.modal.isOpen = false;
		state.pokemon = null;
		return state;
	}

	state.modal.isOpen = true;
	state.modal.name = action.payload;
	return state;
};
