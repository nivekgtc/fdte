import { ContainerModule } from 'inversify'
import { InfraTypes } from '~/ioc/types'
import { CacheStorage } from '~/../fdte/src/application/protocols/cache-storage'
import { HttpClient } from '~/../fdte/src/application/protocols/http'
import { LocalStorageCacheStorage } from '~/infra/cache'
import { AxiosHttpClient } from '~/infra/http'

const InfraClientModule = new ContainerModule((bind) => {
  bind<HttpClient>(InfraTypes.HTTP_CLIENT)
    .to(AxiosHttpClient)
    .inSingletonScope()
  bind<CacheStorage>(InfraTypes.CACHE_STORAGE).to(LocalStorageCacheStorage)
})

export const InfraModule = [InfraClientModule]
