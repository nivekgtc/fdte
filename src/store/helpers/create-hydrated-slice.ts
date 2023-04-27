// import { HYDRATE } from 'next-redux-wrapper'
import {
  ActionReducerMapBuilder,
  createAction,
  createSlice,
  SliceCaseReducers,
  ValidateSliceCaseReducers
} from '@reduxjs/toolkit'
import { castDraft } from 'immer'

export const createHydratedSlice = <
  T,
  Reducers extends SliceCaseReducers<T>,
  Name extends string = string
>({
  name,
  initialState,
  reducers,
  extraReducers
}: {
  name: Name
  initialState: T
  reducers: ValidateSliceCaseReducers<T, Reducers>
  extraReducers?: ((builder: ActionReducerMapBuilder<T>) => void) | undefined
}) => {
  // const hydrateSlice = createAction<T>(HYDRATE)
  return createSlice({
    name,
    initialState,
    reducers: {
      resetState: (state) => {
        state = castDraft(initialState)
        return state
      },
      ...reducers
    },
    extraReducers: (builder) => {
      // builder.addCase(hydrateSlice, (state, action) => {
      //   return {
      //     ...state,
      //     ...action.payload[name]
      //   }
      // })

      return extraReducers?.(builder)
    }
  })
}
