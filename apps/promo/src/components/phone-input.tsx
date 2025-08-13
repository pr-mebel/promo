import React from "react";
import InputMask from "react-input-mask";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

interface PhoneInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ className, formAction: _, ...props }, ref) => {
    return (
      <InputMask mask="+7 (999) 999-99-99" maskChar="_" {...props}>
        {(inputProps: any) => (
          <Input
            {...inputProps}
            ref={ref}
            type="tel"
            className={cn(className)}
          />
        )}
      </InputMask>
    );
  },
);

PhoneInput.displayName = "PhoneInput";
