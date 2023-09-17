/** @jsxImportSource @emotion/react */

import React from "react";
import { FilterControl } from "../FilterControl/FilterControl";
import { RemoveRecordButton } from "../RemoveRecordButton/RemoveRecordButton";
import { todoControlStyle } from "./TodoControl.styles";
import { RemainigAmount } from "../RemainingAmount/RemainigAmount";

export const TodoControl: React.FC = () => {
  return (
    <div css={todoControlStyle}>
      <RemainigAmount />
      <FilterControl />
      <RemoveRecordButton />
    </div>
  );
};
