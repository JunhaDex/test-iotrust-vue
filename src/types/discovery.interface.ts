export type AllowPlatform = 'aos' | 'ios'
export type AllowLocale = 'ko' | 'en'
export type AppEnv = 'dev' | 'stage' | 'prod'

export interface DiscoveryItem {
  id: number
  title: string
  description: string
  profile: string // image url
  allow: {
    platform: AllowPlatform[]
    env: AppEnv[]
    locale: AllowLocale[]
  }
  network?: string
  link?: string
}

export interface BannerItem {
  id: number
  image: string // image url
  link: string // redirect
  order: number
}
