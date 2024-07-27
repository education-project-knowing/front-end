'use client';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

const usePageLeaveWarning = (message: any) => {
  useEffect(() => {
    const handleWindowClose = (e: any) => {
      e.preventDefault();
      e.returnValue = message;
      return message;
    };

    window.addEventListener('beforeunload', handleWindowClose);

    return () => {
      window.removeEventListener('beforeunload', handleWindowClose);
    };
  }, [message]);
};

export default function Home() {
  const { theme, setTheme } = useTheme();
  usePageLeaveWarning('이 페이지를 벗어나면 변경 사항이 저장되지 않습니다. 계속하시겠습니까?');

  console.log(theme);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>안녕하시지!!!!</h1>
      <h1>안녕하세요 2트</h1>
      <form>
        <button type="submit">Signin with Naver </button>
      </form>
      <div className="flex flex-col p-10">
        <button>카카오 로그인</button>
        <button>네이버 로그인</button>
      </div>
      <Button>hi</Button>
      <select
        className="bg-background"
        value={theme}
        onChange={e => setTheme(e.target.value)}>
        <option value="system">System</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
        <option value="blue">blue</option>
      </select>
    </main>
  );
}
