import { RoundStarIcon } from '@/components/common/Atoms/icons/index';

type StarsRatingProps = {
  rating?: 1 | 2 | 3;
  className?: string;
};

export default function StarsRating({ rating = 1, className }: StarsRatingProps) {
  return (
    <div className="flex gap-x-2">
      {[...Array(3)].map((_, index) => (
        <div>
          <RoundStarIcon
            className={className ?? ''}
            key={index}
            color={rating > index ? '' : 'none'}
          />
        </div>
      ))}
    </div>
  );
}
