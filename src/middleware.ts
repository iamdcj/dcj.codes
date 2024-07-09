import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
const isAuthenticated = request.cookies.get('dcj_acc_token')

if (!isAuthenticated) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}
 
export const config = {
  matcher: '/cms/:path*',
}