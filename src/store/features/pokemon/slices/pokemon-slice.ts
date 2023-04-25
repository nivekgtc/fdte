import { SliceCaseReducers } from '@reduxjs/toolkit'
import { setTokenReducer } from '~/store/features/pokemon/actions'
import {
  authSliceName,
  AuthSliceState,
  AUTH_SLICE_INITIAL_STATE,
  SET_TOKEN
} from '~/store/features/pokemon/types'
import { createHydratedSlice } from '~/store/helpers'

export const authSlice = createHydratedSlice<
  AuthSliceState,
  SliceCaseReducers<AuthSliceState>,
  typeof authSliceName
>({
  name: authSliceName,
  initialState: { ...AUTH_SLICE_INITIAL_STATE },
  reducers: {
    [SET_TOKEN]: setTokenReducer
  }
})
