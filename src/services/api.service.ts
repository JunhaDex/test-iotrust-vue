import type { PageResponse } from '@/types/common.interface.ts'

export abstract class ApiService {
  protected emptyPage: PageResponse<unknown> = {
    meta: {
      total: 0,
      pageNo: '1',
      hasNext: false,
    },
    list: [],
  }
}
