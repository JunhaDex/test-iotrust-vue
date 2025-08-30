import { ApiService } from '@/services/api.service.ts'
import type { KeyMapping, PageRequest, PageResponse } from '@/types/common.interface.ts'
import type { AppEnv, DiscoveryItem } from '@/types/discovery.interface.ts'
import { cleanObj, sleep } from '@/utils/common.util.ts'

export class DappService extends ApiService {
  private dappKeyMapping: KeyMapping = {
    id: 'id',
    title: 'title',
    profile: 'profile',
    link: 'link',
  }

  constructor() {
    super()
  }

  async getDiscoveryItemList(options?: {
    page: PageRequest
  }): Promise<PageResponse<DiscoveryItem>> {
    // 실제 환경에서는 axios 를 통한 API 호출이 이루어집니다.
    // api 응답 대기 - api 응답 mock
    await sleep(1000)
    const mock = (await import('@/assets/data/dapp_list.json')).default as any
    const nextPage = options?.page?.nextPage ?? '1'
    const raw = mock[nextPage]
    // 수신 후 데이터 가공
    const locale = this.agentStore.access.locale
    const platform = this.agentStore.access.platform
    const envMode = import.meta.env.MODE as AppEnv
    if (raw) {
      return {
        meta: raw.data.paginate,
        list: raw.data.dapps
          .map((dapp: any) => {
            const semi = cleanObj<DiscoveryItem>(dapp, this.dappKeyMapping)
            semi.description = dapp.description[locale]
            semi.allow = dapp.allow
            if (dapp.network?.length) {
              semi.network = dapp.network.join(', ')
            }
            return semi
          })
          .filter((item: DiscoveryItem) => {
            return (
              item.allow.platform.includes(platform) &&
              item.allow.locale.includes(locale) &&
              item.allow.env.includes(envMode)
            )
          }),
      }
    }
    return this.emptyPage as PageResponse<DiscoveryItem>
  }

  async getFavorite(): Promise<DiscoveryItem[]> {
    await sleep(1000)
    const mock = (await import('@/assets/data/favorite_list.json')).default as any
    console.log(mock)
    return mock.map((item: any) => {
      const semi = cleanObj<DiscoveryItem>(item, this.dappKeyMapping)
      semi.description = item.link
      return semi
    })
  }
}
