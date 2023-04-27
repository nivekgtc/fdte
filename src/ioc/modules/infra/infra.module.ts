import { ContainerModule } from 'inversify'
import { InfraTypes } from '~/ioc/types'
// import { LocalStorageCacheStorage } from '~/infra/cache'
import { AxiosHttpClient } from '~/infra/http'
import { HttpClient } from '~/application/protocols/http'
import { LocalStorageCacheStorage } from '~/infra/cache'

const InfraClientModule = new ContainerModule((bind) => {
  bind<HttpClient>(InfraTypes.HTTP_CLIENT)
    .to(AxiosHttpClient)
    .inSingletonScope()
  bind<CacheStorage | any>(InfraTypes.CACHE_STORAGE).to(LocalStorageCacheStorage)
})

export const InfraModule = [InfraClientModule]
