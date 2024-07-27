import { RoundStarIcon } from '@/components/common/Atoms/icons/index';
import { Button } from '@/components/ui/button';

export function StarButton() {
  return (
    <Button
      variant="none"
      size="fit"
      className="rounded-full p-1 hover:bg-white">
      <RoundStarIcon />
    </Button>
  );
}
