import React from 'react';
import { LocalIcon } from '@/asset/icon';
import { Button } from '@/components/ui/button';
import NavPopOver from '@/components/navigations/components/NavPopOver';
import { useTheme } from 'next-themes';

const NavLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex w-full divide-x-2 text-nowrap bg-popover text-center"> {children}</div>;
};

export default function NavMenu() {
  // 다크모드를 위한 기능.
  const { theme, setTheme } = useTheme();
  // prettier-ignore
  const menu = [
    '마이페이지',
    '의견보내기',
    '후원하기',
    '이용약관'];

  return (
    <div className="flex items-center justify-center gap-6">
      <NavPopOver
        popoverTrigger={
          <div
            className="flex items-center font-bold"
            aria-label="랜덤퀴즈 메뉴 열기">
            <p>랜덤퀴즈</p>
            <LocalIcon name="LiaRandomSolid" />
          </div>
        }
        popoverContent={
          <NavLayout>
            <div className="w-full p-2">모든 문제</div>
            <div className="w-full p-2">모르는 문제</div>
          </NavLayout>
        }
      />

      <NavPopOver
        popoverTrigger={
          <LocalIcon
            aria-label="사용자 메뉴 버튼"
            name="FaUserAlt"
            size={28}
          />
        }
        popoverContent={
          <NavLayout>
            <div className="w-full border-b-2 p-3">전체 학습 진도</div>
            <div className="flex w-full divide-x-2 text-nowrap text-center">
              <div className="w-full p-2">마이 페이지</div>
              <div className="w-full p-2">로그인</div>
            </div>
          </NavLayout>
        }
      />

      <NavPopOver
        popoverTrigger={
          <LocalIcon
            aria-label="전체 메뉴 버튼"
            name="RxHamburgerMenu"
            size={28}
          />
        }
        popoverContent={
          <NavLayout>
            <div className="flex w-full flex-col divide-y-2 text-nowrap text-center">
              {menu.map((menu, index) => (
                <div
                  key={index}
                  className="w-full px-10 py-3">
                  {menu}
                </div>
              ))}
            </div>
          </NavLayout>
        }
      />
    </div>
  );
}
