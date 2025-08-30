export interface PageResponse<T> {
  meta: PageMeta
  list: T[]
}

export interface PageMeta {
  total: number
  pageNo: string
  hasNext: boolean
}

export interface PageRequest {
  nextPage?: string
}

export type KeyMapping = { [key: string]: string }
