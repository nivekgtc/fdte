import { SliceCaseReducers } from '@reduxjs/toolkit'
import { POKEMON_SLICE_INITIAL_STATE, PokemonSliceState, SET_POKEMON_ABILITY, pokemonSliceName } from '../types'
import { setPokemonAbilityReducer } from '../actions'
import { createHydratedSlice } from '~/store/helpers'

export const pokemonSlice = createHydratedSlice<
  PokemonSliceState,
  SliceCaseReducers<PokemonSliceState>,
  typeof pokemonSliceName
>({
  name: pokemonSliceName,
  initialState: { ...POKEMON_SLICE_INITIAL_STATE },
  reducers: {
    [SET_POKEMON_ABILITY]: setPokemonAbilityReducer
  }
})
