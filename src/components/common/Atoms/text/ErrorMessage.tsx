import React from 'react';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

interface InputMessageProps {
  className?: string;
  errorMessage?: string | null;
  successMessage?: string | null;
}

const labelVariants = cva('text-xs text-error');

export default function InputMessage({ className, errorMessage, successMessage, ...props }: InputMessageProps) {
  return (
    <p
      className={cn(labelVariants(), className)}
      {...props}>
      {errorMessage ? errorMessage : successMessage}
    </p>
  );
}
