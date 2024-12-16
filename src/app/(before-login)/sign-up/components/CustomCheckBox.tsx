import { Checkbox } from '@/components/ui/checkbox';
import React from 'react';
import { useFormContext } from 'react-hook-form';

/**
 * react hook form을 사용하는 checkbox 컴포넌트입니다.
 * id를 넘겨주면 formContext를 이용해 ref를 바인딩합니다.
 *
 * !! onCheckedChange 를 인자로 넘길 시 react hook form의 setValue를 사용해서 값을 설정해주어야합니다!
 *
 * @export
 * @param {{
 *   id: string;
 *   onCheckedChange?: (checked: any) => void;
 * }} param0
 * @param {string} param0.id
 * @param {(checked: any) => void} param0.onCheckedChange
 * @returns {void; }) => any}
 */
export default function CustomCheckBox({
  id,
  onCheckedChange,
}: {
  id: string;
  onCheckedChange?: (checked: any) => void;
}) {
  const { register, setValue, watch } = useFormContext();
  const checked = watch(id);
  return (
    <Checkbox
      {...register(id)}
      id={id}
      checked={checked}
      onCheckedChange={onCheckedChange ? onCheckedChange : checked => setValue(id, checked)}
    />
  );
}
