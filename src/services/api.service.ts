import type { PageResponse } from '@/types/common.interface.ts'
import { useAgentStore } from '@/stores/agent.store.ts'

export abstract class ApiService {
  protected agentStore: any
  protected emptyPage: PageResponse<unknown> = {
    meta: {
      total: 0,
      pageNo: '1',
      hasNext: false,
    },
    list: [],
  }

  constructor() {
    this.agentStore = useAgentStore()
  }
}
