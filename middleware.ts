import {NextRequest, NextResponse} from "next/server";

const locales = ["en", "ar"];

export function middleware(request: NextRequest) {
  const {pathname} = request.nextUrl;

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/en", request.url));
  }

  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname.includes(".")) {
    return NextResponse.next();
  }

  const firstSegment = pathname.split("/").filter(Boolean)[0] ?? "";

  if (!locales.includes(firstSegment)) {
    return NextResponse.redirect(new URL(`/en${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"]
};
