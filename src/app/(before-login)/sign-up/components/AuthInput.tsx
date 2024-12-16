import React from 'react';
import InputInButton from '@/app/(before-login)/sign-up/components/InputInButton';
import { cn } from '@/lib/utils';
import InputMessage from '@/components/common/Atoms/text/ErrorMessage';

import { Input } from '@/components/ui/input';
import { useFormContext } from 'react-hook-form';

interface AuthInputInBtnProps {
  id: string;
  errorMessage?: string | null;
  successMessage?: string | null;
  isSuccess?: boolean | undefined;
  inputPlaceholder?: string;
  inputType?: React.HTMLInputTypeAttribute;
}

// zod resolver의 실패 메세지와 성공시 메세지를 출력하는 input
export default function AuthInput({
  id,
  errorMessage,
  successMessage,
  isSuccess,
  inputPlaceholder,
  inputType,
}: AuthInputInBtnProps) {
  const { register, setValue, watch } = useFormContext();
  let inputValue = true;

  // 모든 input에 사용하면 리랜더링을 심각하게 유발해서
  // isSuccess 를 사용하는 케이스에만 적용.
  if (isSuccess) {
    inputValue = watch(id);
  }
  return (
    <>
      <div className="flex w-full flex-col">
        <div className="relative w-full">
          <Input
            className="peer bg-white pb-5 pt-8"
            placeholder=""
            type={inputType}
            {...register(id)}
          />
          <label
            htmlFor={id}
            className={`absolute left-1 top-0 translate-y-0 scale-75 transform text-gray-500 transition-all duration-200 peer-placeholder-shown:left-2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:left-1 peer-focus:top-0 peer-focus:-translate-y-0 peer-focus:scale-75`}>
            {inputPlaceholder}
          </label>
        </div>

        <InputMessage
          className={cn('ml-1 min-h-[40px] pt-1', errorMessage && 'text-red-400', isSuccess && 'text-green-300')}
          errorMessage={errorMessage as string}
          successMessage={!errorMessage && isSuccess && inputValue ? successMessage : null}
        />
      </div>
    </>
  );
}
