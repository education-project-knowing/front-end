import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import * as PopoverRadix from '@radix-ui/react-popover';
import { cn } from '@/lib/utils';

export default function NavPopOver({
  popoverTrigger,
  popoverContent,
  popoverContentWrapperClass,
}: {
  popoverTrigger: React.ReactNode;
  popoverContent: React.ReactNode;
  popoverContentWrapperClass?: string;
}) {
  return (
    <Popover>
      <PopoverTrigger>{popoverTrigger}</PopoverTrigger>
      <PopoverContent
        className={cn('w-fit border-0 border-gray-200 stroke-gray-200 p-0 drop-shadow-md', popoverContentWrapperClass)}
        side="bottom">
        {popoverContent}
        <PopoverRadix.Arrow
          width={20}
          height={11}
          className="PopoverArrow fill-popover stroke-none drop-shadow"
        />
      </PopoverContent>
    </Popover>
  );
}
