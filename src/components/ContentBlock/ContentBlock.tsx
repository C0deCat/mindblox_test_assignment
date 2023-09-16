/** @jsxImportSource @emotion/react */

import { TodoInput } from "../TodoInput/TodoInput";
import { contentBlockStyle } from "./ContentBlock.styles";

export const ContentBlock: React.FC = () => {
  return (
    <main css={contentBlockStyle}>
      <TodoInput />
    </main>
  );
};
