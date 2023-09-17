import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import {
  todoRecordRemoveButtonStyle,
  todoRecordTitleStyle,
  todoRecordWrapperStyle,
} from "./TodoRecord.styles";
import { Checkbox } from "../Checkbox/Checkbox";

/** @jsxImportSource @emotion/react */
interface ITodoRecordProps {
  id: number;
  title: string;
  isCompleted: boolean;
}

export const TodoRecord: React.FC<ITodoRecordProps> = ({
  id,
  title,
  isCompleted,
}) => {
  return (
    <div css={todoRecordWrapperStyle}>
      <Checkbox id={id} />
      <div css={todoRecordTitleStyle}>{title}</div>
      <Button
        style={todoRecordRemoveButtonStyle}
        type="text"
        danger
        icon={<DeleteOutlined />}
      />
    </div>
  );
};
