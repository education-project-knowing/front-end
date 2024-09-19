'use client';
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import StarsRating from '@/app/(after-login)/(quiz)/questions/_components/StarsRating';
import { useForm } from 'react-hook-form';
import { FormInput } from '@/app/(after-login)/(quiz)/questions/page';
import SearchInput from '@/components/common/Monocles/SearchInput';

export default function Filter() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<FormInput>({
    criteriaMode: 'all',
    mode: 'onBlur',
  });
  const onHandleSubmit: any = async (data: any) => {
    console.log(data);
  };

  return (
    <form
    onSubmit={handleSubmit(onHandleSubmit)}
    className="flex flex-col gap-5">
    <SearchInput
      {...register('searchInput')}
      inputRef={register('searchInput').ref}
    />

    {/* TODO: 이부분 전역 상태로 저장했다가
  추후 검색버튼 누르면 쿼리 스트링에 삽입, 이러면 서버 사이드 랜더링도 안깨짐.  */}
    {/* filter */}
    <div className="mb-10 flex w-5/6 flex-col items-start justify-between gap-3 self-center justify-self-center text-nowrap rounded-md bg-white px-5 md:flex-row md:items-center">
      <p className="self-center md:self-start">필터</p>
      <div className="flex items-center">
        <Checkbox {...register('knowing')} />
        <p className="ml-2">아는문제</p>
      </div>
      <div className="mr-12 flex items-center">
        <Checkbox />
        <p className="ml-2">모르는 문제</p>
      </div>
      {Array.from({ length: 3 }, (_, index) => (
        <div
          key={index}
          className="flex items-center gap-3">
          <Checkbox />
          <StarsRating
            className="w-3"
            rating={(index + 1) as 1 | 2 | 3}
          />
        </div>
      ))}
    </div>
  </form>
  );
}
