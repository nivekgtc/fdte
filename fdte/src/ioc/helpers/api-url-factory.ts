export const makeApiUrl = (path: string) =>
  `${import.meta.env.POKEMON_API_URL as string}/${path}`
