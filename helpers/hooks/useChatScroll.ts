import React from 'react'

export function useChatScroll<T>(dep: T) {
  const ref = React.useRef<HTMLDivElement>()
  React.useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight
    }
  }, [dep])
  return ref
}
