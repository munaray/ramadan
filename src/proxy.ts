import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const isAuthenticated = request.cookies.get("admin_authenticated")?.value === "true";
  const isPasscodePage = request.nextUrl.pathname.startsWith("/passcode");
  const isDashboard = request.nextUrl.pathname.startsWith("/dashboard");

  if (isDashboard && !isAuthenticated) {
    return NextResponse.redirect(new URL("/passcode", request.url));
  }

  if (isPasscodePage && isAuthenticated) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/passcode"],
};
