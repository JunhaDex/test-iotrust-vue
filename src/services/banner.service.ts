import { ApiService } from '@/services/api.service.ts'
import type { KeyMapping, PageRequest, PageResponse } from '@/types/common.interface.ts'
import type { AllowLocale, BannerItem } from '@/types/discovery.interface.ts'
import { cleanObj, sleep } from '@/utils/common.util.ts'

export class BannerService extends ApiService {
  private bannerKeyMapping: KeyMapping = {
    id: 'id',
    order: 'order',
  } as const

  constructor() {
    super()
  }

  async getBannerList(options?: { page: PageRequest }): Promise<PageResponse<BannerItem>> {
    // 실제 환경에서는 axios 를 통한 API 호출이 이루어집니다.
    // api 응답 대기 - api 응답 mock
    await sleep(1000)
    const mock = (await import('@/assets/data/banner.json')).default as any
    const nextPage = options?.page?.nextPage ?? '1'
    const raw = mock[nextPage]
    // 수신 후 데이터 가공
    const locale = this.agentStore.access.locale
    if (raw) {
      return {
        meta: { ...raw.paginate },
        list: raw.data.banners
          .map((banner: any) => {
            const semi = cleanObj<BannerItem>(banner, this.bannerKeyMapping)
            semi.image = banner.image[locale]
            semi.link = banner.link[locale]
            semi.detail = {
              description: banner.description[locale],
              extra: this.sortExtraLocale(banner.extra, locale),
            }
            return semi
          })
          .sort((a: BannerItem, b: BannerItem) => a.order - b.order),
      }
    }
    return this.emptyPage as PageResponse<BannerItem>
  }

  private sortExtraLocale(
    extra: Record<string, Record<AllowLocale, string>>,
    locale: AllowLocale,
  ): any {
    return Object.fromEntries(Object.entries(extra).map(([key, value]) => [key, value[locale]]))
  }
}
