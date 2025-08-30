import type { KeyMapping } from '@/types/common.interface.ts'
import type { AllowPlatform } from '@/types/discovery.interface.ts'

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function cleanObj<T extends object>(obj: Record<string, any>, mapping: KeyMapping): T {
  const result: Record<string, any> = {}
  for (const sourceKey in mapping) {
    const targetKey = mapping[sourceKey]
    result[targetKey] = null
  }
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const keyMap = mapping[key]
      if (keyMap) {
        result[keyMap] = obj[key]
      }
    }
  }
  return result as T
}

export function detectPlatform(): AllowPlatform {
  const ua = navigator.userAgent || navigator.vendor
  console.log(ua)
  const isIos =
    /iPad|iPhone|iPod|Mac OS/.test(ua) ||
    (navigator.platform === 'Intel Mac' && navigator.maxTouchPoints > 1)
  // 테스트를 위해서 강제로 ua 를 설정할 수 있습니다.
  // return 'aos'
  return isIos ? 'ios' : 'aos'
}
