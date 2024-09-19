import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

const secret = process.env.AUTH_SECRET as string;
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // if (pathname === '/') {
  //   return NextResponse.redirect(new URL('/main', request.url));
  // }
}

export const config = {
  matcher: ['/', '/login', '/join'],
};
