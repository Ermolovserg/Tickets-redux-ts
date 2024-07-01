import styled from "styled-components";
import { ChangeEvent } from "react";

interface IProps {
  disabled?: boolean;
  isChecked: boolean;
  onChange: (isChecked: boolean) => void;
  text?: string;
  reversedColor?: string;
}

const CheckboxRadio = ({
  disabled,
  isChecked,
  onChange,
  text,
  reversedColor,
}: IProps) => {
  const onHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.currentTarget.checked);
  };

  return (
    <Label>
      <Radio
        type="checkbox"
        checked={isChecked}
        disabled={disabled}
        onChange={(event) => onHandleChange(event)}
        value={reversedColor}
      />
      <span />
      <p title={text}>{text}</p>
    </Label>
  );
};

export default CheckboxRadio;

const Radio = styled.input`
  height: 19px;
  width: 19px;
  box-shadow: ${(props) =>
    props.value ? "0 0 0 1px #E8EBF2" : "0 0 0 1px #4E148C"};
  box-sizing: border-box;

  appearance: none;
  -webkit-appearance: none;
  border: ${(props) =>
    props.value ? "2px solid #4E148C" : "2px solid #E8EBF2"};
  background-color: ${(props) => (props.value ? "#4E148C" : "#E8EBF2")};
  border-radius: 50%;
  margin: 0;
  margin-right: 4px;
  cursor: pointer;

  &:checked {
    background: ${(props) => (props.value ? "#E8EBF2" : "#4E148C")};
  }
`;

const Label = styled.label`
  position: relative;
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
