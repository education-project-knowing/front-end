'use client';
import { usePathname } from 'next/navigation';
import NavMenu from '@/components/navigations/components/NavMenu';

export default function Navigation() {
  const pathname = usePathname();
  // 감출 컴포넌트 url
  const hideComponents = ['/test', '/another-url']; // URL 경로 목록
  const showBackButton = hideComponents.includes(pathname);

  return (
    <nav className="flex justify-between text-nowrap px-2 py-6 md:px-8">
      {/* logo, description */}
      <div className="flex flex-row items-end gap-2">
        <a
          href="/main"
          className="bg-slate-300 px-5 py-2">
          Knowing
        </a>
        {!showBackButton && <p className="hidden md:block">IT 기술면접을 위한 CS지식 랜덤 퀴즈</p>}
      </div>
      <NavMenu />
    </nav>
  );
}
