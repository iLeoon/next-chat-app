import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('chat-app')?.value

  if (!currentUser) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  NextResponse.redirect(new URL('/chat', request.url))
  return NextResponse.next()
}

export const config = {
  matcher: ['/chat/:path*'],
}
