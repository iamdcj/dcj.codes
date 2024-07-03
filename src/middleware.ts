import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
const isAuthenticated = false

if (!isAuthenticated) {
    return NextResponse.redirect(new URL('/cms', request.url))
  }
}
 
export const config = {
  matcher: '/cms/posts',
}