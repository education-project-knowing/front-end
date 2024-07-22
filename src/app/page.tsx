'use client';

import { getProviders, signIn } from 'next-auth/react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>안녕하시지</h1>
      <form
        action={async () => {
          await signIn('naver');
        }}>
        <button type="submit">Signin with Naver</button>
      </form>
      <div className="flex flex-col p-10">
        <button onClick={() => signIn('kakao', { redirect: true, callbackUrl: '/' })}>카카오 로그인</button>
        <button onClick={() => signIn('naver')}>네이버 로그인</button>
      </div>
    </main>
  );
}
