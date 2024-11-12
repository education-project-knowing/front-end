'use client';
import dynamic from 'next/dynamic';
import { FaRegCircle } from 'react-icons/fa';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { CiSearch as CiSearchComp } from 'react-icons/ci';
import { LiaRandomSolid as LiaRandomSolidComp } from 'react-icons/lia';
import { FaUserAlt as FaUserAltComp } from 'react-icons/fa';
import { RxHamburgerMenu as RxHamburgerMenuComp } from 'react-icons/rx';
const StarIconComp = dynamic(() => import('@/asset/icon/icons/ic-star.svg'), {
  ssr: false,
});

export function RoundStarIcon({ ...props }) {
  return (
    <StarIconComp
      // fill={'#FFD233'}
      {...props}
    />
  );
}

export function FaBeerIcon() {
  return <FaRegCircle />;
}

export function FaRegCircleCheckIcon() {
  return <FaRegCircleCheck />;
}

export function LiaRandomSolid() {
  return <LiaRandomSolidComp />;
}

export function CiSearch() {
  return <CiSearchComp />;
}

export function FaUserAlt({ ...props }) {
  return <FaUserAltComp {...props} />;
}

export function RxHamburgerMenu({ ...props }) {
  return <RxHamburgerMenuComp {...props} />;
}
