export type Paginated<T> = {
  results: T
  count: number

  next?: string 
  previous?: string
}
