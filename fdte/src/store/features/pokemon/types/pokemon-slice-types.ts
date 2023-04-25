import { PokemonAbilityModel } from '~/domain/models'

export const pokemonSliceName = 'pokemonSlice' as const

export const SET_POKEMON_ABILITY = 'setPokemonAbility'

export const POKEMON_SLICE_ACTIONS = {
  SET_POKEMON_ABILITY: `${pokemonSliceName}/${SET_POKEMON_ABILITY}`
} as const

export const POKEMON_SLICE_INITIAL_STATE: PokemonSliceState = {
 ability: null
}

export type PokemonSliceState = {
  ability: PokemonAbilityModel
}
