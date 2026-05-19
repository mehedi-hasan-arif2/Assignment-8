import { NextResponse } from 'next/server';

export function middleware(request) {
  
  const session = request.cookies.get("better-auth.session_token"); 
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/courses/') && !session) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  return NextResponse.next();
}