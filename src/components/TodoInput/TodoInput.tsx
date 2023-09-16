/** @jsxImportSource @emotion/react */
import { Input, Space, Button } from "antd";
import { todoInputStyle } from "./TodoInput.style";

export const TodoInput: React.FC = () => {
  return (
    <form css={todoInputStyle}>
      <Space.Compact>
        <Input size="large" placeholder="Input your ToDo" />
        <Button type="primary" size="large">
          Add
        </Button>
      </Space.Compact>
    </form>
  );
};
