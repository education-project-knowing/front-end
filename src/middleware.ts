import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { auth } from '@/auth';

const secret = process.env.AUTH_SECRET as string;
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
}

export const config = {
  matcher: ['/', '/login', '/join'],
};
