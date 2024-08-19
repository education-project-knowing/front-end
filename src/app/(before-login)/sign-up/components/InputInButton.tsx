import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useFormContext } from 'react-hook-form';

export default function InputInButton({
  placeholder,
  inputBtnText,
  onButtonClick,
  id,
  buttonDisabled,
}: {
  placeholder?: string;
  inputBtnText?: string;
  onButtonClick?: () => void;
  id: string;
  buttonDisabled?: boolean;
}) {
  const { register } = useFormContext();

  return (
    <div className="relative w-full">
      <Input
        className="peer bg-white pb-5 pt-8"
        placeholder=""
        {...register(id)}
      />
      <label
        htmlFor={id}
        className={`absolute left-1 top-0 translate-y-0 scale-75 transform text-gray-500 transition-all duration-200 peer-placeholder-shown:left-2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:left-1 peer-focus:top-0 peer-focus:-translate-y-0 peer-focus:scale-75`}>
        {placeholder}
      </label>
      <div className="absolute right-1 top-1/2 -translate-y-1/2 rounded-lg bg-[#738660] px-1 py-[2px] text-xs font-light text-white">
        <Button
          variant={'none'}
          size={'fit'}
          onClick={onButtonClick}
          disabled={buttonDisabled}>
          {inputBtnText}
        </Button>
      </div>
    </div>
  );
}
