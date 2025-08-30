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
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
  return isIos ? 'ios' : 'aos'
}
