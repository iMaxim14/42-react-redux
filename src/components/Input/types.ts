import type { ChangeEvent } from "react";

export interface InputProps {
  inputName: string;
  inputType?: string;
  inputPlaceholder?: string;
  inputLabel?: string;
  id?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
