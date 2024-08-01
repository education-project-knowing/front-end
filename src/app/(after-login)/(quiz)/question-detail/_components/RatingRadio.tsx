'use client';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { LocalIcon } from '@/asset/icon';
import { useState } from 'react';
import StarsRating from '@/app/(after-login)/(quiz)/questions/_components/StarsRating';

export default function RatingRadio() {
  const [selectedOption, setSelectedOption] = useState('option-0');

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <RadioGroup
      value={selectedOption}
      onValueChange={handleOptionChange}
      className="flex flex-row gap-7">
      {Array(3)
        .fill(null)
        .map((_, index) => {
          const optionValue = `option-${index}`;
          return (
            <div
              key={index}
              className="flex items-center gap-2">
              <RadioGroupItem
                value={optionValue}
                id={optionValue}
                className="peer sr-only"
              />
              <Label
                htmlFor={optionValue}
                className="flex cursor-pointer items-center gap-2">
                {selectedOption === optionValue ? (
                  <LocalIcon name="FaRegCircleCheckIcon" />
                ) : (
                  <LocalIcon name="FaBeerIcon" />
                )}
                <StarsRating rating={(index + 1) as 1 | 2 | 3} />
              </Label>
            </div>
          );
        })}
    </RadioGroup>
  );
}
