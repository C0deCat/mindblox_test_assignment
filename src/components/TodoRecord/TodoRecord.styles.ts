import { css } from "@emotion/react";

export const todoRecordWrapperStyle = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const todoRecordTitleStyle = css({
  overflow: "hidden",
  textOverflow: "ellipsis",
  flex: "1 1 100%",
});

export const todoRecordRemoveButtonStyle = {
  minWidth: "32px",
};
