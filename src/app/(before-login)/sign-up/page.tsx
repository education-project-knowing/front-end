'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { z } from 'zod';

// react hookForm
import { DevTool } from '@hookform/devtools';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// custom components
import { FormInput } from '@/app/(after-login)/(quiz)/questions/page';
import { Button } from '@/components/ui/button';
import AuthInputInBtn from '@/app/(before-login)/sign-up/components/AuthInputInBtn';
import AuthInput from '@/app/(before-login)/sign-up/components/AuthInput';
import useTimer from '@/hooks/useTimer';

/* TODO: 아이디(중복확인), 닉네임,
새로운 비밀번호(비번 검증, 적합할시 아래에 적합한 비밀번호입니다 표시), 비밀번호확인(비밀번호 일치)
이메일주소 (인증번호 전송)
인증번호 입력 (인증번호 검증) */

enum inputNames {
  All = 'checkAll',
  Age = 'checkAge',
}

const DuplicateCheck = () => {
  //중복체크
};

const PersonalInfo = () => {
  // 중복체크
  // undefined => 중복검사전, false => 중복검사 실패, true =>중복검사 성공
  const [duplicateCheck, setDeduplicateCheck] = useState<boolean | undefined>(undefined);
  // 이메일 인증번호 전송
  const [isEmailAuthSent, setIsEmailAuthSent] = useState<boolean | undefined>(undefined);
  // 이메일 인증번호 확인
  const [isEmailAuthVerified, setIsEmailAuthVerified] = useState<boolean | undefined>(undefined);

  // zod 스키마
  const userSchema = z
    .object({
      // 중복체크 필드
      duplicate: z
        .string()
        .min(1, { message: '이 입력란은 필수입니다.' })
        .refine(() => duplicateCheck !== undefined, {
          message: '아이디 중복검사를 해주세요.',
        })
        .refine(() => duplicateCheck !== false, {
          message: '아이디가 중복되었습니다.',
        }),
      nickname: z.string().min(1, { message: '이 입력란은 필수입니다.' }),
      password: z
        .string()
        .min(8, { message: '비밀번호는 최소 8자 이상이어야 합니다.' })
        .max(16, { message: '비밀번호는 최대 16자 를 넘을 수 없습니다.' })
        // .regex(/[a-z]/, { message: '비밀번호는 최소 하나의 소문자를 포함해야 합니다.' })
        .regex(/[0-9]/, { message: '비밀번호는 최소 하나의 숫자를 포함해야 합니다.' }),
      confirmPassword: z
        .string()
        .min(8, { message: '비밀번호는 최소 8자 이상이어야 합니다.' })
        .max(16, { message: '비밀번호는 최대 16자 를 넘을 수 없습니다.' })
        // .regex(/[a-z]/, { message: '비밀번호는 최소 하나의 소문자를 포함해야 합니다.' })
        .regex(/[0-9]/, { message: '비밀번호는 최소 하나의 숫자를 포함해야 합니다.' }),
      email: z.string().email(),
    })
    .superRefine((data, ctx) => {
      if (data.password !== data.confirmPassword) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['confirmPassword'],
          message: '비밀번호가 일치하지 않습니다!',
        });
      }
    });

  // hook form
  const methods = useForm<FormInput>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(userSchema),
    defaultValues: {},
  });

  const { errors, isValid, disabled } = methods.formState;

  const onHandleSubmit: any = async (data: any) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onHandleSubmit)}>
        <article className="flex flex-col gap-7">
          {/* 아이디 */}
          <InputSectionWrapper>
            <AuthInputInBtn
              inputPlaceholder="아이디"
              inputBtnText="중복 확인"
              onButtonClick={DuplicateCheck}
              id={'duplicate'}
              errorMessage={errors['duplicate']?.message as string}
              successMessage={!errors['duplicate'] && duplicateCheck ? '중복검사가 완료되었습니다.' : null}
              isSuccess={duplicateCheck}
            />
            {/* 닉네임 */}
            <AuthInput
              id={'nickname'}
              errorMessage={errors['nickname']?.message as string}
              inputPlaceholder="닉네임"
            />
          </InputSectionWrapper>

          {/* 비밀번호 */}
          <InputSectionWrapper>
            {/* 비밀번호 */}
            <AuthInput
              inputType="password"
              inputPlaceholder="비밀번호"
              id={'password'}
              errorMessage={errors['password']?.message as string}
            />
            {/* 비밀번호 확인 */}
            <AuthInput
              inputType="password"
              inputPlaceholder="비밀번호 확인"
              id={'confirmPassword'}
              errorMessage={errors['confirmPassword']?.message as string}
              successMessage={!errors['confirmPassword'] ? '중복검사가 완료되었습니다.' : null}
              isSuccess={!errors['confirmPassword']}
            />
          </InputSectionWrapper>

          {/* 이메일주소 시간이 흘러야해서 분리함.*/}
          {/* TODO: 이메일 인증이랑 인증번호 인증 state 내려줘야함 */}
          <TimerInput errors={errors} />
        </article>

        <Button
          type="submit"
          disabled={!isValid}
          className="hover:cursor-wait">
          확인
        </Button>
      </form>
    </FormProvider>
  );
};
interface InputSectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}
const InputSectionWrapper = ({ children, ...props }: InputSectionWrapperProps) => {
  return (
    <section
      className="flex flex-col items-center justify-between"
      {...props}>
      {children}
    </section>
  );
};

const TimerInput = ({ errors }: { errors: any }) => {
  const { time: emailSendCooldown, startTimer } = useTimer(300);

  const handleEmailAuthSend = () => {
    // 이메일 인증번호 전송 로직
    // ...
    startTimer();
  };

  console.log('Current countdown:', emailSendCooldown);
  if (emailSendCooldown === undefined) {
    console.log('Timer ended or not started');
  }

  return (
    <InputSectionWrapper>
      {/* 이메일주소 시간이 흘러야해서 분리함.*/}
      <AuthInputInBtn
        inputPlaceholder="이메일"
        inputBtnText={'인증번호 전송'}
        onButtonClick={handleEmailAuthSend}
        id={'email'}
        errorMessage={errors['email']?.message as string}
        buttonDisabled={emailSendCooldown !== undefined && emailSendCooldown > 0}
      />
      {/* 인증번호 확인 */}
      <AuthInputInBtn
        inputPlaceholder={emailSendCooldown !== undefined ? `${emailSendCooldown}초` : '이메일'}
        inputBtnText="인증번호 확인"
        onButtonClick={DuplicateCheck}
        id={'email2'}
        errorMessage={errors['email2']?.message as string}
      />
    </InputSectionWrapper>
  );
};

// 단계 정의
const steps = [
  { name: '약관 동의', component: dynamic(() => import('@/app/(before-login)/sign-up/components/TermsAgreement')) },
  { name: '회원 가입', component: PersonalInfo },
];

export default function SignupProcess() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <div className="mx-auto w-full rounded-xl bg-white px-10 pb-8 pt-3 sm:max-w-[540px]">
      <h2>{steps[currentStep].name}</h2>
      <CurrentStepComponent onNext={nextStep} />
      <button onClick={prevStep}>이전으로가기</button>
    </div>
  );
}

SignupProcess;
