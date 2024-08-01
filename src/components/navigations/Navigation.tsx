'use client';

import { useTheme } from 'next-themes';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import * as PopoverRadix from '@radix-ui/react-popover';
import { LocalIcon } from '@/asset/icon';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import NavPopOver from '@/components/navigations/components/NavPopOver';
import NavMenu from '@/components/navigations/components/NavMenu';

export default function Navigation() {
  // 다크모드를 위한 기능.
  const { theme, setTheme } = useTheme();

  const pathname = usePathname();
  // 특정 URL 경로 정의
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
