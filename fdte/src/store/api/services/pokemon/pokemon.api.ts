// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PokemonAbilityModel } from '~/domain/models'

// const loadPokemonAbility = useService<RemoteLoadPokemonAbilityList>(ServicesTypes.POKEMON.LOAD_POKEMON_ABILITY_LIST)

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<PokemonAbilityModel, string>({
      query: (idOrName) => `pokemon/${idOrName}`,
      // queryFn: async (idOrName) => {
      //   const responseOrError = await loadPokemonAbility.load(idOrName)
      //   responseOrError.isError()
      }
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = pokemonApi