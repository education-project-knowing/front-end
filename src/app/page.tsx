'use client';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePreventNavigation } from '@/hooks/usePreventNavigation';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  usePreventNavigation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const userConfirmed = window.confirm('학습을 마치시겠습니까?');
    if (userConfirmed) {
      router.push(href);
    }
  };

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
      <Link
        href="main"
        onClick={e => handleClick(e, 'main')}>
        main
      </Link>
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
