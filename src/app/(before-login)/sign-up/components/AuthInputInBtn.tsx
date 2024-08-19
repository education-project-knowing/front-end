import React from 'react';
import InputInButton from '@/app/(before-login)/sign-up/components/InputInButton';
import { cn } from '@/lib/utils';
import InputMessage from '@/components/common/Atoms/text/ErrorMessage';

interface AuthInputInBtnProps {
  id: string;
  inputBtnText: string;
  onButtonClick?: () => void;
  errorMessage?: string | null;
  successMessage?: string | null;
  isSuccess?: boolean | undefined;
  inputPlaceholder?: string;
  buttonDisabled?: boolean;
}

// zod resolver의 실패 메세지와 성공시 메세지를 출력하는 input
export default function AuthInputInBtn({
  id,
  inputBtnText,
  onButtonClick,
  errorMessage,
  successMessage,
  isSuccess,
  inputPlaceholder,
  buttonDisabled,
}: AuthInputInBtnProps) {
  return (
    <>
      <div className="flex w-full flex-col">
        <InputInButton
          placeholder={inputPlaceholder}
          inputBtnText={inputBtnText}
          onButtonClick={onButtonClick}
          id={id}
          buttonDisabled={buttonDisabled}
        />
        <InputMessage
          className={cn('ml-1 min-h-[40px] pt-1', errorMessage && 'text-red-400', isSuccess && 'text-green-300')}
          errorMessage={errorMessage as string}
          successMessage={!errorMessage && isSuccess ? successMessage : null}
        />
      </div>
    </>
  );
}
