import { LoadFunction } from '~/domain/common/types'
import { UserModel } from '~/domain/models'

export interface LoadUserList extends LoadFunction<UserModel[]> {}
