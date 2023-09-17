import { css } from "@emotion/react";

export const checkboxStyle = css({
  display: "none",
  "& + label span": {
    display: "inline-block",
    width: "25px",
    height: "17px",
    margin: "0 5px -4px 0",
    "&:before, &:after": {
      transition: "all .3s ease-in-out",
      content: '""',
      position: "absolute",
      zIndex: "1",
      width: "1rem",
      height: "1rem",
      background: "transparent",
      border: "1px solid #52c41a",
    },

    "&:after": {
      zIndex: 0,
      border: "none",
    },
  },

  "&:checked + label span": {
    "&:before": {
      transform: "rotateY(180deg)",
      background: "#52c41a",
    },
  },
});
