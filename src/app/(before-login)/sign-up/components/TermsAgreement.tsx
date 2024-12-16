import React, { useState } from 'react';

// react hookForm
import { DevTool } from '@hookform/devtools';
import { FormProvider, useForm } from 'react-hook-form';
// custom components
import CustomCheckBox from '@/app/(before-login)/sign-up/components/CustomCheckBox';
import { FormInput } from '@/app/(after-login)/(quiz)/questions/page';
import { Button } from '@/components/ui/button';

// 체크박스 id
enum CheckboxNames {
  All = 'checkAll',
  Age = 'checkAge',
}

const TermsAgreement = ({ onNext }: { onNext: () => void }) => {
  // 체크박스
  const checkboxes = Object.freeze([
    { id: 'checkAgree', label: '이용약관 동의(필수)' },
    { id: 'checkPrivacy', label: '개인정보 수집 및 이용 동의(필수)' },
  ]);

  const methods = useForm<FormInput>({
    criteriaMode: 'all',
    mode: 'onBlur',
    defaultValues: {
      [CheckboxNames.All]: false,
      [CheckboxNames.Age]: false,
      ...Object.fromEntries(checkboxes.map(({ id }) => [id, false])),
    },
  });

  const { watch, setValue } = methods;
  const checkAll = watch(CheckboxNames.All);
  const checkAge = watch(CheckboxNames.Age);
  const individualChecks = checkboxes.map(({ id }) => watch(id));

  // 체크박스 상태에 따라 checkAll의 상태 변경
  React.useEffect(() => {
    const allChecked = [...individualChecks, checkAge].every(Boolean);
    setValue(CheckboxNames.All, allChecked);
  }, [...individualChecks, checkAge]);

  // 모두 동의하기 이벤트함수
  const onCheckChange = (checked: any) => {
    methods.setValue(CheckboxNames.All, checked);

    // 만약 'checkAll'이 체크되었다면 하단의 체크박스들도 모두 체크
    checkboxes.forEach(({ id }) => setValue(id, checked));
    setValue(CheckboxNames.Age, checked);
  };

  const onHandleSubmit: any = async (data: any) => {
    onNext();
  };
  let words = `
    제 1조 (목적)
    이 약관은.. Ullamco ex commodo elit deserunt sunt fugiat amet sint officia veniam quis sint qui deserunt.
    Aliqua culpa exercitation esse magna labore in excepteur esse occaecat in nulla commodo voluptate do. Minim esse laborum sint minim enim deserunt anim Lorem culpa laboris. Labore magna sint incididunt minim sunt enim dolor eiusmod. Commodo sit amet magna sunt aliquip duis esse est eiusmod ipsum exercitation. Eu sunt fugiat tempor velit velit laboris reprehenderit consequat ullamco cupidatat in adipisicing adipisicing. Fugiat minim dolore quis mollit labore cillum ex exercitation non qui.
   `;

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onHandleSubmit)}>
          <article className="flex flex-col gap-10">
            {/* 전체 동의 섹션 */}
            <section>
              <div className="flex items-center justify-between">
                <label htmlFor={CheckboxNames.All}>전체 동의</label>
                <CustomCheckBox
                  id={CheckboxNames.All}
                  onCheckedChange={onCheckChange}
                />
              </div>
            </section>

            {checkboxes.map(({ id, label }) => (
              <section key={id}>
                <div className="flex items-center justify-between">
                  <label htmlFor={id}>{label}</label>
                  <CustomCheckBox id={id} />
                </div>
                <div className="scrollbar-hide h-40 w-full overflow-y-scroll bg-gray-300">
                  <p className="whitespace-pre-wrap break-words">{words}</p>
                </div>
              </section>
            ))}

            <section>
              <div className="flex items-center justify-between">
                <label htmlFor={CheckboxNames.Age}>14세 이상 동의</label>
                <CustomCheckBox id={CheckboxNames.Age} />
              </div>
            </section>
          </article>

          <Button
            type="submit"
            disabled={![...individualChecks, checkAge].every(Boolean)}>
            동의하고 다음으로
          </Button>
          <DevTool control={methods.control} />
        </form>
      </FormProvider>
    </>
  );
};
export default TermsAgreement;
