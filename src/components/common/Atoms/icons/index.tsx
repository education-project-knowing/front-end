/* 아이콘의 정의는 @/asset/icons 에서 정의합니다.
이곳은 재사용할 커스텀 아이콘을 정의하는 곳입니다. */
import { LocalIcon } from '@/asset/icon';
import { cn } from '@/lib/utils';

export function RoundStarIcon({ className, ...props }: { className?: string }) {
  return (
    <LocalIcon
      name="RoundStarIcon"
      className={cn('h-4 w-4 overflow-visible stroke-[#FFD233] stroke-[3px]', className)}
      color="none"
      {...props}
    />
  );
}
