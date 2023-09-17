/** @jsxImportSource @emotion/react */

import { checkboxStyle } from "./Checkbox.style";

interface ICheckboxProps {
  id: number;
}

export const Checkbox: React.FC<ICheckboxProps> = ({ id }) => {
  return (
    <>
      <input css={checkboxStyle} type="checkbox" id={`${id}`} />
      <label htmlFor={`${id}`}>
        <span></span>
      </label>
    </>
  );
};
