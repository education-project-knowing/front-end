'use client';

import { useTheme } from 'next-themes';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import * as PopoverRadix from '@radix-ui/react-popover';
import { LocalIcon } from '@/asset/icon';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="flex justify-between text-nowrap px-2 py-6 md:px-8">
      {/* logo, description */}
      <div className="flex flex-row items-end gap-2">
        <a
          href="/main"
          className="bg-slate-300 px-5 py-2">
          Knowing
        </a>
        <p className="hidden md:block">IT 기술면접을 위한 CS지식 랜덤 퀴즈</p>
      </div>
      <div className="flex items-center justify-center gap-3">
        <Button
          variant={'none'}
          className="p-0 font-bold">
          <p>랜덤퀴즈</p>
          <LocalIcon name="LiaRandomSolid" />
        </Button>
        <Popover>
          <PopoverTrigger>
            <LocalIcon
              name="FaUserAlt"
              size={28}
            />
          </PopoverTrigger>
          <PopoverContent
            className="border-0 border-gray-200 stroke-gray-200 p-0 drop-shadow-md"
            side="bottom">
            <div className="w-full border-b-2 p-3">전체 학습 진도</div>
            <div className="flex w-full divide-x-2">
              <div className="w-full p-2">마이 페이지</div>
              <div className="w-full p-2">로그인</div>
            </div>
            <PopoverRadix.Arrow
              width={20}
              height={11}
              className="PopoverArrow fill-popover stroke-none drop-shadow"
            />
          </PopoverContent>
        </Popover>
        <LocalIcon
          name="RxHamburgerMenu"
          size={28}
        />
      </div>
      {/* <select
        className="bg-background"
        value={theme}
        onChange={e => setTheme(e.target.value)}>
        <option value="system">System</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
        <option value="blue">blue</option>
      </select> */}
    </nav>
  );
}
