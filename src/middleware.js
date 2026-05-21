import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const isLoggedIn = request.cookies.get("isLoggedIn")?.value === "true";

  /* Catch protected courses details and profile routes */
  if ((pathname.startsWith("/courses/") && pathname !== "/courses") || pathname.startsWith("/my-profile")) {
    if (!isLoggedIn) {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/courses/:path*", "/my-profile/:path*"],
};