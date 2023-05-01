// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { NamedAPIResource, NamedAPIResourceList } from '~/domain/models';
import { generateRandomPokemonId } from '~/store/helpers/generate-random-poke-id';

// const loadPokemonAbility = useService<RemoteLoadPokemonAbilityList>(ServicesTypes.POKEMON.LOAD_POKEMON_ABILITY_LIST)

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
	reducerPath: 'pokemonApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
	endpoints: (builder) => ({
		// getPokemonByName: builder.query<PokemonAbilityModel, string>({
		//   query: (idOrName) => `pokemon/${idOrName}`,
		//   // queryFn: async (idOrName) => {
		//   //   const responseOrError = await loadPokemonAbility.load(idOrName)
		//   //   responseOrError.isError()
		//   }
		// TODO -> fix query first type
		getRandomPokemon: builder.query<any, void>({
			query: () => `pokemon/${generateRandomPokemonId()}`,
		}),
		getPokemonTypes: builder.query<any, void>({
			query: () => `type`,
			transformResponse: (response: NamedAPIResourceList): NamedAPIResource[] =>
				response.results,
		}),
		getPokemonAbilities: builder.query<any, void>({
			query: () => `ability`,
			transformResponse: (response: NamedAPIResourceList): NamedAPIResource[] =>
				response.results,
		}),
	}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
// export const { useGetPokemonByNameQuery } = pokemonApi;
export const {
	useGetRandomPokemonQuery,
	useLazyGetRandomPokemonQuery,
	useGetPokemonTypesQuery,
	useLazyGetPokemonTypesQuery,
	useGetPokemonAbilitiesQuery,
	useLazyGetPokemonAbilitiesQuery,
} = pokemonApi;
