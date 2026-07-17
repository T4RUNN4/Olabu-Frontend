import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function proxy(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: request.headers,
  });
  const user = session?.user;
  const pathName = request.nextUrl.pathname;

  if (session && (pathName.startsWith("/login") || pathName.startsWith("/register"))) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (
    !session &&
    (pathName.startsWith("/add-wallboards") ||
      pathName.startsWith("/manage-wallboards") ||
      pathName.startsWith("/rate-us"))
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (
    user && user.role !== "admin" &&
    (pathName.startsWith("/add-wallboards") ||
      pathName.startsWith("/manage-wallboards"))
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (user && user.role === "admin" && pathName.startsWith("/rate-us")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/login",
    "/register",
    "/add-wallboards",
    "/manage-wallboards",
    "/rate-us",
  ],
};