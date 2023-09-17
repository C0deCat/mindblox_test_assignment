import { css } from "@emotion/react";

export const todoListStyle = css({
  overflow: "auto",
  flexBasis: "400px",
  marginTop: "15px",
  "&::webkit-scrollbar": {
    width: "5px",
    height: "5px",
    background: "#000",
  },
});
