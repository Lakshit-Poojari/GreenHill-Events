import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./backend/middleware/authMiddleware";

export function proxy(request:NextRequest){
    const token = request.cookies.get("token")?.value;

    if (!token) {
        return NextResponse.redirect(new URL("/controlpanel/login", request.url))
    }

    try {
    verifyToken(token);

    return NextResponse.next();
  } catch {
    return NextResponse.redirect(
      new URL("/controlpanel/login", request.url)
    );
  }
}

export const config = {
    matcher:[
        "/controlpanel/dashboard/:path*",
        "/controlpanel/users/:path*",
        "/controlpanel/posts/:path*",
        "/controlpanel/comments/:path*",
        "/controlpanel/entertainment/:path*",
    ]
}