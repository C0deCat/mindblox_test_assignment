/** @jsxImportSource @emotion/react */
import { Radio } from "antd";
import { useMemo } from "react";

export enum EFilterOptions {
  ALL = "ALL",
  ACTIVE = "ACTIVE",
  COMPLETED = "COMPLETED",
}

export const FilterControl: React.FC = () => {
  const options = useMemo(
    () => [
      { label: "All", value: EFilterOptions.ALL },
      { label: "Active", value: EFilterOptions.ACTIVE },
      { label: "Completed", value: EFilterOptions.COMPLETED },
    ],
    []
  );

  return (
    <Radio.Group
      options={options}
      optionType="button"
      defaultValue={EFilterOptions.ALL}
    />
  );
};
