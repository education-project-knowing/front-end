import StarIconComp from '@/asset/icon/icons/ic-star.svg';
import { FaRegCircle } from 'react-icons/fa';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { CiSearch as CiSearchComp } from 'react-icons/ci';

export function RoundStarIcon({ ...props }) {
  return (
    <StarIconComp
      fill={'#FFD233'}
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

export function CiSearch() {
  return <CiSearchComp />;
}
