import "./styles.ts";
import type { InputProps } from "./types";
import { InputWrapper, InputStyle, LabelStyle } from "./styles";
function Input({
  inputName,
  inputType='text',
  inputPlaceholder,
  inputLabel,
  id,
  value,
  onChange,
}: InputProps) {

  // console.log('Input render or re-render'); 
  
  return (
    <InputWrapper>
      {inputLabel && <LabelStyle htmlFor={id}>{inputLabel}</LabelStyle>}
      <InputStyle
        name={inputName}
        type={inputType}
        placeholder={inputPlaceholder}
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  );
}

export default Input;
