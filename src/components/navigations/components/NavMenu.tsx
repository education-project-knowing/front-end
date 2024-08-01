import React from 'react';
import { LocalIcon } from '@/asset/icon';
import { Button } from '@/components/ui/button';
import NavPopOver from '@/components/navigations/components/NavPopOver';

export default function NavMenu() {
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
          <>
            <Button
              variant={'none'}
              className="p-0 font-bold">
              <p>랜덤퀴즈</p>
              <LocalIcon name="LiaRandomSolid" />
            </Button>
          </>
        }
        popoverContent={
          <>
            <div className="flex w-full divide-x-2 text-nowrap text-center">
              <div className="w-full p-2">모든 문제</div>
              <div className="w-full p-2">모르는 문제</div>
            </div>
          </>
        }
      />

      <NavPopOver
        popoverTrigger={
          <LocalIcon
            name="FaUserAlt"
            size={28}
          />
        }
        popoverContent={
          <>
            <div className="w-full border-b-2 p-3">전체 학습 진도</div>
            <div className="flex w-full divide-x-2 text-nowrap text-center">
              <div className="w-full p-2">마이 페이지</div>
              <div className="w-full p-2">로그인</div>
            </div>
          </>
        }
      />

      <NavPopOver
        popoverTrigger={
          <LocalIcon
            name="RxHamburgerMenu"
            size={28}
          />
        }
        popoverContent={
          <>
            <div className="flex w-full flex-col divide-y-2 text-nowrap text-center">
              {menu.map((menu, index) => (
                <div
                  key={index}
                  className="w-full px-10 py-3">
                  {menu}
                </div>
              ))}
            </div>
          </>
        }
      />
    </div>
  );
}
