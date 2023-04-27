import { ContainerModule } from 'inversify'
import { makeApiUrl } from '~/ioc/helpers'
import { ApiTypes } from '~/ioc/types'

export const PokemonApiModule = new ContainerModule((bind) => {
  bind(ApiTypes.POKEMON.LOAD_POKEMON_ABILITY_LIST).toDynamicValue(() =>
    makeApiUrl('ability')
  )
})
