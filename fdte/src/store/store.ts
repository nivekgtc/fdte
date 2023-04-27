import { configureStore } from '@reduxjs/toolkit'
import { pokemonSlice } from './features/pokemon/slices/pokemon-slice'
import { pokemonSliceName, PokemonSliceState } from './features/pokemon/types'

export type AppDispatch = ReturnType<typeof createStore>['dispatch']
export type AppState = ReturnType<ReturnType<typeof createStore>['getState']>

export type StoreProps = {
  pokemonSlice: PokemonSliceState
}

const createStore = () =>
  configureStore<StoreProps>({
    reducer: {
      [pokemonSliceName]: pokemonSlice.reducer
    }
  })

const store = createStore()

export default store
