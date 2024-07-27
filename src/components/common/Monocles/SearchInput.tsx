import { LocalIcon } from '@/asset/icon';
import { Input, InputProps } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import React from 'react';

const DEFAULT_PLACEHOLDER = '키워드를 입력해주세요.';

export default function SearchInput({ className, placeholder = DEFAULT_PLACEHOLDER, ...props }: InputProps) {
  return (
    <div className="relative">
      <Input
        className={cn(
          'border-stroke text-overline text-text-primary placeholder:text-overline placeholder:text-text-disabled desktop:pr-11 desktop:text-body4 desktop:placeholder:text-body4 rounded-full border-blue-700 bg-white py-2 pl-4 pr-10',
          className,
        )}
        placeholder={placeholder}
        {...props}
      />
      <span className="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-xl bg-slate-100 p-2 px-3">
        <LocalIcon
          name="CiSearch"
          className="desktop:h-5 desktop:w-5 h-4 w-4"
        />
      </span>
    </div>
  );
}
