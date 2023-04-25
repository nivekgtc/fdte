import { LoadFunction } from '~/domain/common/types'
import { PokemonAbilityModel } from '~/domain/models'

export interface LoadPokemonAbilityList extends LoadFunction<PokemonAbilityModel[], string> {}
