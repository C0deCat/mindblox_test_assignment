/** @jsxImportSource @emotion/react */

import { Divider } from "antd";
import { TodoInput } from "../TodoInput/TodoInput";
import { TodoList } from "../TodoList/TodoList";
import { contentBlockStyle } from "./ContentBlock.styles";
import { TodoControl } from "../TodoControl/TodoControl";

export const ContentBlock: React.FC = () => {
  return (
    <main css={contentBlockStyle}>
      <TodoInput />
      <TodoList />
      <Divider />
      <TodoControl />
    </main>
  );
};
