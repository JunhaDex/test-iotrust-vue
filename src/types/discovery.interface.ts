export interface DiscoveryItem {
  id: number
  title: string
  description: string
  profile: string // image url
  meta: {
    platform: 'aos' | 'ios'
    env: 'dev' | 'stage' | 'prod'
    locale: string
  }
}
