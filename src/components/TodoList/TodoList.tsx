/** @jsxImportSource @emotion/react */
import { List } from "antd";
import { todoListStyle } from "./TodoList.style";
import { TodoRecord } from "../TodoRecord/TodoRecord";

const fakeData = [
  {
    id: 1,
    title:
      "YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Yadayadayada",
    isCompleted: false,
  },
  {
    id: 3,
    title: "Yadayadayada",
    isCompleted: false,
  },
];

export const TodoList: React.FC = () => {
  return (
    <List
      css={todoListStyle}
      dataSource={fakeData}
      renderItem={(item) => (
        <TodoRecord
          id={item.id}
          title={item.title}
          isCompleted={item.isCompleted}
        />
      )}
    />
  );
};
