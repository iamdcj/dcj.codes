import { log } from "console";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


const validateToken = async (token: string): Promise<boolean> => {
  const res = await fetch(
    "http://localhost:3001/api/authentication/validate",
    {
      headers: {
        Authorization: token,
      },
    }
  );
  
  
  if(!res.ok) {
    throw new Error('Unable to authenticate')
  }
  const data = await res.json()

  return data.isValid as boolean
}
export async function middleware(request: NextRequest) {
  const token = request.cookies.get("dcj_acc_token")?.value || "";
  const path = request.nextUrl.pathname;

  if (path.startsWith("/cms")) {
    try {
      const isAuthenticated = await validateToken(token)
      
      if(!isAuthenticated) {
       throw new Error('Unable to authenticate user')
      } 
      
    } catch (error) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }
  if (path === 'login') {
    try {
      const isAuthenticated = await validateToken(token)

      if(isAuthenticated) {
        return NextResponse.redirect(new URL('/cms', request.url))
      } 
      
    } catch (error) {
      console.error(error);
    }
  }
}

export const config = {
  matcher: ["/cms/:path*", "/login"],
};
