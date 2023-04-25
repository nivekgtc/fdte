import { createAction } from '@reduxjs/toolkit'

export const resetState = (sliceName: string) =>
  createAction(`${sliceName}/resetState`)()
