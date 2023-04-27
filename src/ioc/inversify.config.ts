import 'reflect-metadata'

import { Container } from 'inversify'
import {
  InfraModule,
  ApplicationModule,
  ApiModule,
  ValidationModule,
  ConstantsModule
} from './modules'

const container = new Container()

try {
  container.load(...InfraModule, ...ApplicationModule, ...ApiModule, ...ValidationModule, ...ConstantsModule)
} catch (error) {
  console.error(error)
}

export { container }
