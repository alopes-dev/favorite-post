/* eslint-disable @typescript-eslint/no-explicit-any */

interface Window {
  ReactNativeWebView: any
  JSBridge: any
  webkit: any
}

export type TagData = {
  eventType?: string
  parameters?: Record<string, unknown>
}

export type BridgeModel = {
  action:
    | 'analytics'
    | 'close'
    | 'navigation'
    | 'external_navigation'
    | 'finish'
    | 'clipboard'
    | 'dialer'
    | 'fuel'
    | 'show_km_extract'
    | 'show_coupon'
    | 'show_optin'
  data?: TagData
}

export const sendMessageToNative = (payload: BridgeModel) => {
  if (typeof window === 'undefined') return null

  const json = JSON.stringify(payload, null, 4)

  const { JSBridge, ReactNativeWebView, webkit } = window as unknown as Window

  if (!JSBridge && !ReactNativeWebView && webkit) {
    webkit.messageHandlers.observer.postMessage(json)
  }

  if (JSBridge && !webkit && !ReactNativeWebView) {
    if (payload.action === 'close') {
      JSBridge.closePWA(json)
    } else if (payload.action === 'analytics') {
      JSBridge.analytics(json)
    } else if (payload.action === 'finish') {
      JSBridge.finish(json)
    } else if (
      payload.action === 'navigation' ||
      payload.action === 'show_coupon' ||
      payload.action === 'show_km_extract' ||
      payload.action === 'show_optin'
    ) {
      JSBridge.navigate(json)
    } else if (payload.action === 'clipboard') {
      JSBridge.clipboard(json)
    } else if (payload.action === 'dialer') {
      JSBridge.dialer(json)
    }
  }

  if (!JSBridge && !webkit && ReactNativeWebView) {
    ReactNativeWebView.postMessage(json)
  }

  return null
}

export const closeWebView = () => {
  return sendMessageToNative({ action: 'close' })
}
