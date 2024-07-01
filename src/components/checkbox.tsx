import styled from "styled-components";
import notChecked from "../images/not-checked.svg";
import checked from "../images/checked.svg";
import { ChangeEvent } from "react";

interface IProps {
  disabled?: boolean;
  isChecked: boolean;
  onChange: (isChecked: boolean) => void;
  text?: string;
}

const Checkbox = ({ disabled, isChecked, onChange, text }: IProps) => {
  const onHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.currentTarget.checked);
  };

  return (
    <Label>
      <InputCheckbox
        type="checkbox"
        checked={isChecked}
        disabled={disabled}
        onChange={onHandleChange}
        aria-label={text} 
      />
      <CustomSpan isChecked={isChecked} /> {}
      <p>{text}</p>
    </Label>
  );
};

const InputCheckbox = styled.input`
  width: 1px;
  height: 1px;
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
`;

interface SpanProps {
  isChecked: boolean;
}

const CustomSpan = styled.span<SpanProps>`
  position: absolute;
  width: 21px;
  height: 21px;
  background-image: url(${props => (props.isChecked ? checked : notChecked)});
  border-radius: 4px;
  margin-left: -20px;
`;

const Label = styled.label`
  position: relative;
  padding-left: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  white-space: nowrap;
  cursor: pointer;

  p {
    font-family: Inter;
    margin-left: 16px;
  }
`;

export default Checkbox;