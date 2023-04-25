import { inject, injectable } from 'inversify'
import { Response } from '~/domain/common/types'
import { error, success } from '~/domain/common/utils'
import { ApiTypes, InfraTypes } from '~/ioc/types'
import { RequestResponse } from '~/../fdte/src/application/common/helpers'
import type { HttpClient } from '~/../fdte/src/application/protocols/http'
import { LoadPokemonAbilityList } from '~/domain/usecases'
import { PokemonAbilityModel } from '~/domain/models'

@injectable()
export class RemoteLoadPokemonAbilityList implements LoadPokemonAbilityList {
  constructor(
    @inject(ApiTypes.POKEMON.LOAD_POKEMON_ABILITY_LIST) private readonly url: string,
    @inject(InfraTypes.HTTP_CLIENT)
    private readonly httpClient: HttpClient<RemoteLoadPokemonAbilityList.Model>
  ) {}

  async load(idOrName: string): Promise<Response<PokemonAbilityModel[]>> {
    const httpResponse = await this.httpClient.request({
      method: 'get',
      url: `${this.url}/${idOrName}`
    })

    const usersOrError =
      RequestResponse.handle<RemoteLoadPokemonAbilityList.Model>(httpResponse)

    if (usersOrError.isError()) {
      return error(usersOrError.value)
    }

    return success(usersOrError.value.response as PokemonAbilityModel[])
  }
}

// formatResponse not needed in this cenary 

export namespace RemoteLoadPokemonAbilityList {
  export type Model = PokemonAbilityModel[]
}
