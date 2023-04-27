export interface GetCacheStorage {
  get: <T>(key: string) => T | undefined
}

export interface SetCacheStorage {
  set: <T>(key: string, value?: T) => void
}

export interface CacheStorage extends GetCacheStorage, SetCacheStorage {}
