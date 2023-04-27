import { createAction } from '@reduxjs/toolkit'
import { ActionMap, ReducerMap } from '~/store/types/action-reducer-map'
import { POKEMON_SLICE_ACTIONS, PokemonSliceState } from '../types'
import { PokemonAbilityModel } from '~/domain/models'

export const setToken: ActionMap<PokemonAbilityModel> = createAction(
  POKEMON_SLICE_ACTIONS.SET_POKEMON_ABILITY
  )

export const setPokemonAbilityReducer: ReducerMap<PokemonSliceState, PokemonAbilityModel> = (
  state,
  action
) => {
  state.ability = action.payload
  return state
}
